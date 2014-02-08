function findIndex(array, predicate) {
  var len = array.length;
  var i;
  if (len === 0) return -1;
  if (typeof predicate !== 'function') {
    throw new TypeError('predicate must be a function');
  }

  for (i = 0; i < len; i++) {
    if (predicate.call(this, array[i], i, array)) return i;
  }
  return -1;
}

module.exports = findIndex;
