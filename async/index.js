var async = {};

async.sequence = function(funcs) {
  var data;
  return function(callback) {
    funcs.forEach(function(func) {
      data = func(callback, data);
    });
  }
}

module.exports = async;