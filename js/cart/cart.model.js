export const CartModel = {
    getTotal(cart) {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },

    getItemsCount(cart) {
        return cart.reduce((count, item) => count + item.quantity, 0);
    }
};