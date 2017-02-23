var value = function(callback) {
  while (Object.prototype.toString.call(callback) === '[object Function]') {
    callback = callback();
  }
  return callback;
}

module.exports = value;