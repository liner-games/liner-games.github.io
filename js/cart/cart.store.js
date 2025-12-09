export const cartStore = {
    state: JSON.parse(localStorage.getItem("cart")) || [],

    save() {
        localStorage.setItem("cart", JSON.stringify(this.state));
    },

    add(product) {
        const item = this.state.find(i => i.id === product.id);

        if (item) {
            item.quantity++;
        } else {
            this.state.push({
                id: product.id,
                name: product.fullName,
                price: product.price,
                quantity: 1
            });
        }

        this.save();
        this.emitUpdate(product.id);
    },

    getItem(id) {
        return this.state.find(i => i.id === id) || null;
    },

    remove(id) {
        this.state = this.state.filter(i => i.id !== id);
        this.save();
        this.emitUpdate(id);
    },

    increase(id) {
        const item = this.state.find(i => i.id === id);
        if (!item) return;

        item.quantity++;

        this.save();
        this.emitUpdate(id);
    },

    decrease(id) {
        const item = this.state.find(i => i.id === id);
        if (!item) return;

        item.quantity--;

        if (item.quantity <= 0) {
            this.remove(id);
        } else {
            this.save();
            this.emitUpdate(id);
        }
    },

    clear() {
        this.state = [];
        this.save();
        this.emitUpdate(1);
    },

    emitUpdate(id) {
        const item = this.state.find(i => i.id === id);
        const quantity = item ? item.quantity : 0;

        window.dispatchEvent(new CustomEvent('cartUpdated', {
            detail: { id, quantity, state: [...this.state] }
        }));
    }
}