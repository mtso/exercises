// ```
// mtso 2017
// ```

module.exports = function(array, callback, context) {
  var mapped = [];
  array.forEach(function(item, index) {
    mapped.push(callback.call(context, item, index, array));
  });
  return mapped;
};

var bareForLoopMap = function(array, callback, context) {
  var mapped = [];
  for (var i = 0; i < array.length; i++) {
    mapped.push(callback.apply(this, [array[i], i, array]));
  }
  return mapped;
};