// debounce v2 (with flush)
// mtso 2017

module.exports = function(callback, threshold) {
  var delay;
  var context;
  var args;

  var trigger = function(context, args) {
    return function() {
      callback.apply(context, args);
    };
  };

  var thunk = function() {
    context = this;
    args = arguments;
    clearTimeout(delay);
    delay = setTimeout(trigger(context, args), threshold);
  };

  thunk.flush = function() {
    clearTimeout(delay);
    trigger(context, args)();
  };

  return thunk;
};
