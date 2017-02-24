var async = {};

// call each function in sequence
// passing the result of the previous
// into the next
async.sequence = function(funcSequence) {
  
  // WIP: hard-coded attempt to understand assumptions and test behavior......

  // Returns a function that takes in a callback with the signature: `function(err, data) {}`
  return function(doneFunc) {
    // Signature of each function in sequence is `function(callback, data)`
    funcSequence[0](function(err, data) {
      // Second function is passed into the callback parameter of the first, along with the data parameter
      funcSequence[1](function(err, data) {
        // The last function should invoke the `doneFunc` callback
        doneFunc.call(null, err, data);

      }, data); // `data` parameter from the first func's callback

    }, undefined); // What is the first function invoked with for data?
  };

  // NOTE: for each function
  // invoke, passing in a callback?
};

module.exports = async;
