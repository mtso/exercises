var async = {};

async.sequence = function(funcs) {
  return function(callback) {
    funcs.forEach(function(func) {
      func(callback);
    });
  }
}

module.exports = async;