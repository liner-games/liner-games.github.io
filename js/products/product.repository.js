import { productsData } from "./products.data.js";

export const ProductRepository = {
    findById(id) {
        return productsData.find(i => i.id === id);
    },

    getAll() {
        return productsData;
    }
};