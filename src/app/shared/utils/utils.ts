/**
 * A utility function to update deep nested objects
 * Will update all keys of the name you specify
 * @param {object} o the object you want to transform
 * @param {string} k the key you want to update (updates all of same name)
 * @param {any} v the value you want to update it to
 */
export const updateNestedObject = (o: any, k: string, v: any): any => {
  const obj = Object.assign({}, o);
  _updateNestedRecurse(obj, k, v);
  return obj;
};
const _updateNestedRecurse = (o: any, k: string, v: any) => {
  if (!o) return;
  Object.keys(o).forEach((key) => {
    if (key == k) o[k] = v;
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
export const deleteKeyNestedObject = (o: any, k: string) => {
  const obj = Object.assign({}, o);
  _deleteKeyNestedObject(obj, k);
  return obj;
};
const _deleteKeyNestedObject = (o: any, k: string) => {
  // console.log('delete', o, o[k], k);
  if (!o) return;
  delete o[k];
  Object.keys(o).forEach((key) => {
    if (typeof o[key] === 'object') {
      _deleteKeyNestedObject(o[key], k);
    }
  });
};
