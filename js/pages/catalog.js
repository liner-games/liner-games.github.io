import { CatalogController } from "../catalog/catalog.controller.js";
import { CartController } from "../cart/cart.controller.js";

document.addEventListener("DOMContentLoaded", () => {
    CatalogController.init();
    CartController.init();
})