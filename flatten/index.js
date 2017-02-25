function flatten(array) {
  if (!Array.isArray(array)) {
    return [array];
  } else {
    var flattened = [];
    array.forEach(function(item) {
      flattened = flattened.concat(flatten(item));
    });
    return flattened;
  }
}

module.exports = flatten;
