module.exports = function(func, delay) {
  var timer;
  return function() {
    var args = arguments;
    var context = this;
    var run = function() {
      func.apply(context, args);
    }
    clearTimeout(timer);
    timer = setTimeout(run, delay);
  }
}