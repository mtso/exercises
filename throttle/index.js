// ```
// mtso 2017
// ```

// `throttle` prevents a callback from being invoked more
// than once within the time threshold.
var throttle = function(callback, threshold) {
  // Toggle to prevent callback invocation.
  var isCalled = false;

  // Stores the context and arguments of the last invocation.
  var context;
  var args;

  // Store the safety trigger timer (invoke callback once more 
  // after the threshold to "make up for swallowed calls").
  var onceMore;

  // `run` wraps the callback invocation.
  var run = function() {
    callback.apply(context, args);
  }

  // `refresh` toggles isCalled to let the next throttle
  // invocation trigger the callback.
  var refresh = function() {
    isCalled = false;
    onceMore = setTimeout(run, 0);
  }

  return function() {
    context = this;
    args = arguments;

    if (!isCalled) {
      // Toggle to prevent the next invocation from triggering this block.
      isCalled = true;
      // Clear the safety trigger.
      clearTimeout(onceMore);
      // Invoke the callback once.
      run();
      // Set a timer for with the threshold duration.
      setTimeout(refresh, threshold);
    }
  }
}

module.exports = throttle;