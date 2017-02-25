// ```
// throttle v1
// mtso 2017
// ```

// `throttle` prevents a callback from being invoked more
// than once within the time threshold.
var throttle = function(callback, threshold) {
  // Flag to signal that the callback may be invoked.
  var isReady = true;

  // Declare a flag that is true if throttle was
  // invoked at least once during cooldown.
  var onceMore;

  // Stores the context and arguments of the last invocation.
  var context;
  var args;

  // `trigger` wraps the callback invocation, applying the last invoked context and arguments.
  // Starts the cooldown timer, and toggles the isReady flag to block during the cooldown.
  function trigger() {
    isReady = false;
    callback.apply(context, args);
    // MARK: Why do we need to add one to the threshold here????
    setTimeout(refresh, threshold); 
  }

  // `refresh` toggles isReady to let the next throttle
  // invocation trigger the callback.
  function refresh() {
    isReady = true;
    // If throttle was invoked during the cooldown,
    // trigger the callback once more.
    if (onceMore) {
      trigger();
    }
  }

  return function() {
    // Set the context and arguments immediately.
    context = this;
    args = arguments;

    if (isReady) {
      trigger();
    } else {
      // If invoked during cooldown, trigger the callback
      // at the end of the cooldown.
      onceMore = true;
    }
  };
};

module.exports = throttle;
