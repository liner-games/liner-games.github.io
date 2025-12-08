import { CartModel } from "./cart.model.js";

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

        cart.forEach(item =>
            itemsHTML += `
                <div class="cart-item">
                    <div>
                        <div class="product-name">${item.name}</div>
                        <br/>
                        <div class="product-price">${item.price.toLocaleString() + '₽ / шт.'}</div>
                    </div>
    
                    <div class="cart-left-container">
                        <div class="item-count-buttons">
                            <button data-decrease="${item.id}">-</button>
                            
                            <input type="text"
                                value="${item.quantity}" 
                                id="itemCount-${item.id}" 
                            readonly>
                            
                            <button data-increase="${item.id}">+</button>
                        </div>
                        <div class="cart-remove" data-remove-main=${item.id}>&times;</div>
                    </div>
                </div>
        `);

        items.innerHTML = itemsHTML;
        total.textContent = CartModel.getTotal(cart).toLocaleString() + '₽';
        totalItems.textContent = CartModel.getItemsCount(cart);
    }
};