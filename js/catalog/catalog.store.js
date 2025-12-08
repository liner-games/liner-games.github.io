export const catalogStore = {
    state: {
        category: "all",
        vendors: [],
        sort: "name-asc",
        search: ""
    },

    setCategory(value) {
        this.state.category = value;
    },

    setVendors(list) {
        this.state.vendors = list;
    },

    setSort(value) {
        this.state.sort = value;
    },

    setSearch(value) {
        this.state.search = value;
    },

    reset() {
        this.state = {
            category: "all",
            vendors: [],
            sort: "name-asc",
            search: ""
        }
    }
}