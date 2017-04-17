import { isUserscript } from './utils';

const getValue = function getValue(key) {
    if (isUserscript()) {
        return GM_getValue(key); // eslint-disable-line
    }
    return localStorage.getItem(key);
};

const setValue = function setValue(key, value) {
    console.log(isUserscript());
    if (isUserscript()) {
        return GM_setValue(key, value); // eslint-disable-line
    }
    return localStorage.setItem(key, value);
};

const removeValue = function removeValue(key) {
    if (isUserscript()) {
        return GM_deleteValue(key); // eslint-disable-line
    }
    return localStorage.removeItem(key);
};

export { getValue, setValue, removeValue };
