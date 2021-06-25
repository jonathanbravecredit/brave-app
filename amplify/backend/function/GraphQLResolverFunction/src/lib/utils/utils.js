"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnNestedObject = exports.deleteKeyNestedObject = exports.updateNestedObject = void 0;
/**
 * A utility function to update deep nested objects
 * Will update all keys of the name you specify
 * @param {object} o the object you want to transform
 * @param {string} k the key you want to update (updates all of same name)
 * @param {any} v the value you want to update it to
 */
const updateNestedObject = (o, k, v) => {
    const obj = Object.assign({}, o);
    _updateNestedRecurse(obj, k, v);
    return obj;
};
exports.updateNestedObject = updateNestedObject;
const _updateNestedRecurse = (o, k, v) => {
    if (!o)
        return;
    Object.keys(o).forEach((key) => {
        if (key == k)
            o[k] = v;
        if (typeof o[key] === 'object') {
            _updateNestedRecurse(o[key], k, v);
        }
    });
};
/**
 * A utility function to remove unwanted fields by key
 * Will delete all keys of the name you specify
 * @param o
 * @param k
 * @returns
 */
const deleteKeyNestedObject = (o, k) => {
    const obj = Object.assign({}, o);
    _deleteKeyNestedObject(obj, k);
    return obj;
};
exports.deleteKeyNestedObject = deleteKeyNestedObject;
const _deleteKeyNestedObject = (o, k) => {
    if (!o)
        return;
    delete o[k];
    Object.keys(o).forEach((key) => {
        if (typeof o[key] === 'object') {
            _deleteKeyNestedObject(o[key], k);
        }
    });
};
/**
 * A utility function to find the first matching key in a nested object
 *   use carefully. Does not iterate over arrays
 * @param {object} o the object you want to search
 * @param {string} k the key you want to search for
 */
const returnNestedObject = (o, k) => {
    let value;
    const _returnNestedObject = (obj) => {
        Object.keys(obj).forEach((key) => {
            if (key === k)
                value = obj[k];
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                _returnNestedObject(obj[key]);
            }
        });
    };
    _returnNestedObject(o);
    return value;
};
exports.returnNestedObject = returnNestedObject;
