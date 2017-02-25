var async = {};

// call each function in sequence
// passing the result of the previous
// into the next
async.sequence = function(funcSequence) {
  // we need to return a function that, when called, calls each function in the sequence
  // the callback in each function should be passed a function that runs the next function
  // with the data that was returned in the previous callback
  // for the last function callback, we need to invoke the done callback and pass in the data

  var iter = 0;
  var done;
  var context;

  function makeCallback() {
    return function(err, data) {
      if (iter === funcSequence.length) {
        return done.call(context, err, data);
      } else {
        var current = funcSequence[iter];
        iter++;
        return current(makeCallback(), data);
      }
    };
  }
  // function wrap(func) {
  //   var iter = 1;
  //   return function(err, data) {
  //     if (func === undefined) {
  //       return done.call(context, err, data);
  //     } else {
  //       var current = funcSequence[iter];
  //       iter += 1;
  //       var next = funcSequence[iter];
  //       return current(next, data);
  //     }
  //   }
  // }

  // Returns a function that takes in a callback with the signature: `function(err, data) {}`
  return function(doneFunc) {
    context = this;
    done = doneFunc;

    // return wrap(funcSequence[0]);
    return funcSequence[iter](makeCallback());
  };
};

module.exports = async;
