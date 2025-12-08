import {CartModel} from "./cart.model.js";

export const CartView = {
    renderModal(cart) {
        const container = document.getElementById('cartItems');
        const total = document.getElementById('cartTotal');

        let cartItemsHTML = ``;

        if (cart.length === 0) {
            container.innerHTML = `<p>Корзина пуста</p>`;
            total.textContent = (0).toString();
            return;
        }

        let cartTotal = 0;

        cart.forEach((item) => {
            const price = item.price || 0;
            const quantity = item.quantity || 0;
            const itemPrice = quantity * price;
            cartTotal += itemPrice;

            cartItemsHTML += `
            <div class="cart-item">
                <div class="left-container">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-quantity-price">
                        <div id="cartItemPrice">${price.toLocaleString()} руб.</div>
                        &nbsp;x&nbsp;
                        <div id="cartItemQuantity">${quantity}</div>
                    </div>
                    
                </div>
                
                <div class="right-container">
                    <div class="cart-item-price-total">${itemPrice.toLocaleString()} руб.</div>
                    <div class="cart-item-remove" data-remove=${item.id}>&times;</div>
                </div>
            </div>
        `;
        });

        total.textContent = cartTotal.toLocaleString();
        container.innerHTML = cartItemsHTML;
    },

    updateIcon(cart) {
       const count = document.getElementById('cartCount');

       if (count) count.textContent = CartModel.getItemsCount(cart);
    }
}