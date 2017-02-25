// limits the callback from being called more than once
// within the `threshold` in milliseconds.
module.exports = function(callback, threshold) {
  // save context
  // save arguments
  var lastContext;
  var lastArguments;

  var isReady = true;
  var isCalledDuringCooldown = false;

  var trigger = function() {
    isReady = false;
    callback.apply(lastContext, lastArguments);
    setTimeout(refresh, threshold);
  };

  var refresh = function() {
    isReady = true;
    if (isCalledDuringCooldown) {
      trigger();
    }
  };

  return function() {
    lastContext = this;
    lastArguments = arguments;

    if (isReady) {
      trigger();
    } else {
      isCalledDuringCooldown = true;
    }
  };
};
