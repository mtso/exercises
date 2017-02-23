// ```
// mtso 2017
// ```

// `memoize` keeps a record of function arguments so that
// a call with a previously passed set of arguments
// will just return the value that has been previously computed.
var memoize = function(callback) {
  // Initialize a hash to save the key-value map.
  var cache = {};
  return function() {
    // Serialize the arguments.
    var key = JSON.stringify(arguments);
    // If the key does not exist,
    // set it to the result of the callback.
    if (cache[key] === undefined) {
      cache[key] = callback.apply(this, arguments);
    }
    return cache[key];
  }
}

module.exports = memoize;