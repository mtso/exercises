module.exports = function(func, delay) {
  var timer;
  var run = function(context, args) {
    return function() {
      func.apply(context, args);
    }
  }
  return function() {
    clearTimeout(timer);
    timer = setTimeout(run(this, arguments), delay);
  }
}