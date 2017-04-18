const getStoreType = function getStoreType() {
    try {
        GM_info; // eslint-disable-line
        return 'userscript'; // Disable userscript storage temp
    } catch (error) {
        console.debug('Storage could not find userscript storage, trying next');
    }
    return 'default';
};

let instance = null;

class Store {
    constructor() {
        if (!instance) {
            instance = this;
            this.storeType = getStoreType();
            console.debug(this.storeType);
        }
        return instance;
    }


    getValue(key) {
        if (this.storeType === 'userscript') {
            return JSON.parse(GM_getValue(key)); // eslint-disable-line
        }
        return JSON.parse(localStorage.getItem('bptv-'.concat(key)));
    }

    setValue(key, value) {
        const jsonVal = JSON.stringify(value);
        if (this.storeType === 'userscript') {
            return GM_setValue(key, jsonVal); // eslint-disable-line
        }
        return localStorage.setItem('bptv-'.concat(key), jsonVal);
    }

    removeValue(key) {
        if (this.storeType === 'userscript') {
            return GM_deleteValue(key); // eslint-disable-line
        }
        return localStorage.removeItem('bptv-'.concat(key));
    }
}


export default new Store();
