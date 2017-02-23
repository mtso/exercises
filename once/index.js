// ```
// mtso 2017
// ```

// `once` is a pre-function hook that enforces that
// a function be executed only once. Subsequent calls
// returns the previously computed value.
var once = function(callback) {
  var value;
  var isCalled = false;
  return function() {
    if (!isCalled) {
      isCalled = true;
      value = callback.apply(this, arguments);
    }
    return value;
  }
}

module.exports = once;