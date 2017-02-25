function isFunction(value) {
  return Object.prototype.toString.call(value) === '[object Function]';
}

function flattenThunk(thunk) {
  return function(done) {
    thunk(resolve(done));
  };
}

function resolve(done) {
  return function(err, result) {
    if (isFunction(result)) {
      return flattenThunk(result)(done);
    } else {
      return done(null, result);
    }
  };
}

module.exports = flattenThunk;
