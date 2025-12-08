import { ProductRepository } from "../products/product.repository.js";

export const ComparisonView = {
    renderTable() {
        const container = document.getElementById('comparisonItems');

        let innerHTML = ``;

        const productOne = ProductRepository.findById(1);
        const productTwo = ProductRepository.findById(15);

        const products = [productOne, productTwo];

        innerHTML += `
                <table class="comparison-table">
                    <thead>
                        <tr>
                            <th scope="col">Характеристика</th>
            `;

        products.forEach((product) => {
            innerHTML += `<th>${product.name}</th>`;
        });

        container.innerHTML = innerHTML;
    }
};