import { cartStore } from './cart.store.js';
import { CartView } from "./cart.view.js";
import { ProductRepository } from "../products/product.repository.js";

export const CartController = {
    init() {
        this.initModalEvents();
        CartView.updateIcon(cartStore.state);
    },

    initModalEvents() {
        const modal = document.getElementById('cartModal');

        document.getElementById('cartToggle').addEventListener('click', () => {
            modal.classList.toggle('active');
            CartView.renderModal(cartStore.state);
        });

        document.getElementById('cartClose').addEventListener('click', () => {
           modal.classList.toggle('active');
        });

        window.addEventListener('cartUpdated', (e) => {
            const state = e.detail.state;
            CartView.updateIcon(state);
            CartView.renderModal(state);
        });

        document.body.addEventListener('click', (e) => {
            if (e.target.dataset.remove) {
                const id = Number(e.target.dataset.remove);
                this.remove(id);
            }
        });
    },

    add(id) {
        const product = ProductRepository.findById(id);
        if (!product) return;

        cartStore.add(product);
    },

    remove(id) {
        cartStore.remove(id);
    }
};