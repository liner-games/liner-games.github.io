import { catalogStore } from "./catalog.store.js";
import { CatalogModel } from "./catalog.model.js";
import { CatalogView } from "./catalog.view.js";

import { cartStore } from "../cart/cart.store.js";
import { productsData } from "../products/products.data.js";
import { Url } from "../utils/url.js";
import { ProductRepository } from "../products/product.repository.js";

export const CatalogController = {
    init() {
        CatalogView.renderVendorFilters(CatalogModel.getVendors(productsData));

        this.initFiltersFromURL();
        this.applyStateToUI();

        this.updateProducts();

        this.bindEvents();
        this.bindCartButtons();
    },

    updateProducts() {
        const filteredProducts = CatalogModel.getFilteredProducts(productsData, catalogStore.state);
        CatalogView.renderProducts(filteredProducts);
    },

    initFiltersFromURL() {
        const category = Url.getParam("category") || 'all';
        const vendor = Url.getParam("vendor")?.split(',') ?? [];
        const search = Url.getParam("search") || '';
        const sort = Url.getParam("sort") || 'name-asc';

        catalogStore.setCategory(category);
        catalogStore.setVendors(vendor);
        catalogStore.setSearch(search);
        catalogStore.setSort(sort);
    },

    applyStateToUI() {
        const state = catalogStore.state;

        const categoryRadio = document.querySelector(
            `input[name="category"][value="${state.category}"]`);

        if (categoryRadio) categoryRadio.checked = true;

        document.querySelectorAll(`input[name="vendor"]`).forEach(input => {
            input.checked = state.vendors.includes(input.value);
        });

        const searchField = document.getElementById('searchQuery');

        if (searchField) {
            searchField.value = state.search;
        }
    },

    updateURL() {
        const state = catalogStore.state;

        if (state.category !== 'all') {
            Url.setParam("category", state.category);
        } else {
            Url.removeParam("category");
        }

        if (state.vendors.length !== 0) {
            Url.setParam("vendor", state.vendors.join(','));
        } else {
            Url.removeParam("vendor");
        }

        if (state.search !== '') {
            Url.setParam("search", state.search);
        } else {
            Url.removeParam("search");
        }

        if (state.sort !== 'name-asc')  {
            Url.setParam("sort", state.sort);
        } else {
            Url.removeParam("sort");
        }
    },

    bindEvents() {
        document.getElementById('sortSelect')?.addEventListener('change', e => {
            catalogStore.setSort(e.target.value);
            this.updateURL();
            this.updateProducts();
        });

        document.getElementById('applyFilters')?.addEventListener('click', () => {
            this.collectFiltersFromUI();
            this.updateURL();
            this.updateProducts();
        });

        document.getElementById('resetFilters')?.addEventListener('click', e => {
            catalogStore.reset();
            this.updateURL();
            this.applyStateToUI();
            this.updateProducts();
        });

        window.addEventListener('cartUpdated', e => {
            const { id, quantity } = e.detail;
            CatalogView.updateProductCard(id, quantity);
        });

        document.body.addEventListener('click', (e) => {
            if (e.target.matches('.add-to-cart')) {
                const id = Number(e.target.dataset.id);
                const product = ProductRepository.findById(id);
                if (!product) return;

                cartStore.add(product);
            }
        });
    },

    bindCartButtons() {
        document.body.addEventListener("click", e => {
           if (e.target.dataset.decrease) {
               const id = Number(e.target.dataset.decrease);
               cartStore.decrease(id);
           }

            if (e.target.dataset.increase) {
                const id = Number(e.target.dataset.increase);
                cartStore.increase(id);
            }
        });
    },

    collectFiltersFromUI() {
        const category = document.querySelector('input[name="category"]:checked');
        const vendors = [...document.querySelectorAll('input[name="vendor"]:checked')]
            .map(v => v.value);

        catalogStore.setCategory(category?.value ?? 'all');
        catalogStore.setVendors(vendors);
        catalogStore.setSearch(document.getElementById('searchQuery')?.value);
    }
}