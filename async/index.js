var async = {};

// we need to return a function that, when called, calls each function in the sequence
// the callback in each function should be passed a function that runs the next function
// with the data that was returned in the previous callback
// for the last function callback, we need to invoke the done callback and pass in the data
async.sequence = function(funcSequence) {

  // Returns a function that takes in a callback with the signature: `function(err, data) {}`
  return function(doneFunc) {
    var depth = 0;
    var context = this;

    function makeCallback() {
      return function(err, data) {
        if (depth === funcSequence.length) {
          return doneFunc.call(context, err, data);
        } else {
          var current = funcSequence[depth];
          depth += 1;
          return current(makeCallback(), data);
        }
      };
    }

    return funcSequence[depth](makeCallback());
  };
};

module.exports = async;
