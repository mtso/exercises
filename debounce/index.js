// ```
// mtso 2017
// ```

// `debounce` wraps a callback function with a delay timer.
// As long as the function continues to be invoked, will not be triggered.
// The function will be called after the `delay` (in milliseconds) after the last invocation.
// - **param** `callback` The function to execute.
// - **param** `delay` The time in miliseconds to delay the function call.
// - **return** `[function]` The thunk function.
var debounce = function(callback, delay) {
  // Declare a handle for the timer.
  var timer;
  // `run` wraps the callback function and applies provided context and arguments.
  var run = function(context, args) {
    return function() {
      callback.apply(context, args);
    };
  };
  // Returns a thunk that passes the invoking object as the context
  // and the arguments provided in each call into the runner to 
  // build a function with the appropriate context and arguments.
  return function() {
    clearTimeout(timer);
    timer = setTimeout(run(this, arguments), delay);
  };
};

module.exports = debounce;