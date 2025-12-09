import { CartModel } from "./cart.model.js";
import {ProductRepository} from "../products/product.repository.js";

export const CartPageView = {
    render(cart) {
        const items = document.getElementById('cartItems');
        const total = document.getElementById('cartTotal');
        const totalItems = document.getElementById('cartTotalItems');

        if (cart.length === 0) {
            items.innerHTML = "<p style='color: #fff'>Корзина пуста.</p>";
            total.textContent = (0).toString();
            totalItems.textContent = (0).toString();
            return;
        }

        let itemsHTML = ``;

        cart.forEach(item => {
            const product = ProductRepository.findById(item.id);
                itemsHTML += `
                <div class="cart-item">
                    <div class="cart-item-main">
                        <div class="cart-item-info">
                            <div class="cart-item-name">${product.fullName}</div>
                            <div class="cart-item-category">${product.categoryName}</div>
                            <div class="cart-item-specs">
                                ${Object.values(product.specs).map(spec => `<span class="spec">${spec}</span>`).join('')}
                            </div>
                            <div class="cart-item-price">${product.formattedPrice} / шт.</div>
                        </div>
                        <div class="cart-item-controls">
                            <div class="cart-item-quantity">
                                <div class="item-count-buttons">
                                    <button data-decrease="${item.id}" class="quantity-btn decrease-btn">-</button>
                                    <input type="text" value="${item.quantity}" readonly>
                                    <button data-increase="${item.id}" class="quantity-btn increase-btn">+</button>
                                </div>
                            </div>
                            <div class="cart-item-total">
                                ${(item.quantity * item.price).toLocaleString() + '₽'}
                            </div>
                            <div class="cart-item-remove" data-remove-main=${item.id} title="Удалить товар">×</div>
                        </div>
                    </div>
                </div>
        `});

        items.innerHTML = itemsHTML;
        total.textContent = CartModel.getTotal(cart).toLocaleString() + '₽';
        totalItems.textContent = CartModel.getItemsCount(cart);
    }
};