export const Url =  {
    getParams() {
        return Object.fromEntries(new URLSearchParams(location.search));
    },

    getParam(key, defaultValue = null) {
        const params = new URLSearchParams(location.search);
        const value = params.get(key);
        return value === null ? defaultValue : value;
    },

    setParam(key, value) {
        const params = new URLSearchParams(location.search);
        params.set(key, value);
        Url.replace(params);
    },

    removeParam(key) {
        const params = new URLSearchParams(location.search);
        params.delete(key);
        Url.replace(params);
    },

    replace(params) {
        history.replaceState(null, "", window.location.pathname + "?" + params.toString());
    },

    clear() {
        history.replaceState(null, "", window.location.pathname + "?");
    }
}