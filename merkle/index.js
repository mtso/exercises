// Constructor
var Merkle = function(array, hasher) {
  this.root;
}

// returns an object with index and breadcrumbs
// { index: 3, breadcrumbs: [ 'a', '-1790830488' ] }
// or false if the target node is not in the tree
Merkle.prototype.getVerification(target) {

}

// returns a boolean
Merkle.prototype.verify = function(target, root, verificationObject, hasher) {
  
}