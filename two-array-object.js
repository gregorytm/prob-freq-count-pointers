// add whatever parameters you deem necessary
//wtf reduce
function twoArrayObject(keys, values) {
  return keys.reduce((obj, cur, idx) => {
    obj[cur] = idx < values.length ? values[idx] : null;
    return obj;
  }, {});
}
