// debounce v3
// mtso 2017

module.exports = function(callback, delay) {
  var lastContext;
  var lastArguments;
  var delayTimer;

  function trigger() {
    callback.apply(lastContext, lastArguments);
  }

  function thunk() {
    lastContext = this;
    lastArguments = arguments;
    clearTimeout(delayTimer);
    delayTimer = setTimeout(trigger, delay);
  }

  thunk.flush = function() {
    clearTimeout(delayTimer);
    trigger();
  }

  return thunk;
}