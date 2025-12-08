import { cartStore } from './cart.store.js';
import { CartPageView } from "./cart.page.view.js";

export const CartPageController = {
    init() {
        CartPageView.render(cartStore.state);
        this.bindEvents();
        this.bindCartButtons();
    },

    bindEvents() {
        window.addEventListener("cartUpdated", () => {
            CartPageView.render(cartStore.state);
        });

        document.body.addEventListener("click", (e) => {
            if (e.target.dataset.removeMain) {
                const id = Number(e.target.dataset.removeMain);
                cartStore.remove(id);
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
    }
};