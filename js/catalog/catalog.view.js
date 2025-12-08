import { cartStore } from "../cart/cart.store.js";

export const CatalogView = {
    renderProducts(list) {
        const grid = document.getElementById('products');
        const count = document.getElementById('productsCount');

        let productCardsHTML = ``;
        let productsCounter = 0;

        list.forEach(product => {
            const cartItem = cartStore.state.find(item => item.id === product.id);

            const productCard = `
                <div class="product-card" data-id="${product.id}">
                    <div class="product-info">
                        <div class="product-category">${product.categoryName}</div>
                        <div class="product-name">${product.fullName}</div>
                        <div class="product-specs">${Object.values(product.specs).join(', ')}</div>
                        <div class="product-price">${product.formattedPrice}</div>
                        
                        <div class="product-card-footer">
                            <button class="add-to-cart" data-id=${product.id}>
                                ${cartItem ? 'В корзине' : 'Добавить в корзину'}
                            </button>
                            
                            <div class="item-count-buttons ${cartItem ? 'active' : ''}"
                                data-count="${product.id}"
                                >
                                <button data-decrease="${product.id}">-</button>
                                
                                <input type="text"
                                    value="${cartItem ? cartItem.quantity : 0}" 
                                    id="itemCount-${product.id}" 
                                readonly>
                                
                                <button data-increase="${product.id}">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            productCardsHTML += productCard;
            productsCounter++;
        });

        if (productsCounter === 0) {
            grid.innerHTML = `
                <div class="product-card">
                    <div class="product-specs">Ничего не найдено.</div>
                    <div class="product-category">Попробуйте изменить фильтры.</div>
                </div>
            `;
            return;
        }

        grid.innerHTML = productCardsHTML;
        count.textContent = productsCounter.toString();
    },

    updateProductCard(id, quantity) {
        const card = document.querySelector(`.product-card[data-id="${id}"]`);
        if (!card) return;

        const counter = card.querySelector(".item-count-buttons");
        const input = card.querySelector(`#itemCount-${id}`);
        const button = card.querySelector(`.add-to-cart`);

        if (!quantity || quantity <= 0) {
            counter.classList.remove("active");
            if (input) input.value = 0;
            if (button) button.textContent = "Добавить в корзину";
        } else {
            counter.classList.add("active");
            if (input) input.value = quantity;
            if (button) button.textContent = "В корзине";
        }
    },

    renderVendorFilters(vendors) {
        const container = document.getElementById('vendor-filters');
        let html = `<h4>Производитель</h4>`;

        vendors.forEach(v => {
            html += `
                <input class="checkbox-input" type="checkbox" name="vendor" value="${v.toLowerCase()}" 
                id="vendor-${v}">
                <label class="checkbox-label" for="vendor-${v}">${v}</label>
            `;
        });


        container.innerHTML = html;
    }
}