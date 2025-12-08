export const CatalogModel = {
    getVendors(products) {
        return [...new Set(products.map(p => p.vendor))];
    },

    getFilteredProducts(products, state) {
        let filtered = [...products];

        if (state.category !== 'all') {
            filtered = filtered.filter(p => p.category === state.category);
        }

        if (state.vendors.length !== 0) {
            filtered = filtered.filter(p => state.vendors.includes(p.vendor.toLowerCase()));
        }

        if (state.search !== '') {
            const query = (state.search || '').toLowerCase().trim();
            if (query) {
                filtered = filtered.filter(p => p.fullName.toLowerCase().includes(query));
            }
        }

        switch (state.sort) {
            case 'name-asc':
                filtered = filtered.sort((a, b) => a.fullName.localeCompare(b.fullName));
                break;
            case 'name-desc':
                filtered = filtered.sort((a, b) => b.fullName.localeCompare(a.fullName));
                break;
            case 'price-asc':
                filtered = filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                filtered = filtered.sort((a, b) => b.price - a.price);
                break;
            default:
                filtered = filtered.sort((a, b) => a.fullName.localeCompare(b.fullName));
        }

        return filtered;
    }
}