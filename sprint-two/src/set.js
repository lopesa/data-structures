var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage.push(item);
};

setPrototype.contains = function(item) {
  if (_.indexOf(this._storage, item) !== -1) {
    return true;
  }
  return false;
};

setPrototype.remove = function(item) {
  var temp;
  if (_.indexOf(this._storage, item) !== -1) {
    temp = item; 
    this._storage.splice(_.indexOf(this._storage, item), 1);  
  } else {
    alert(item + ' to remove cannot be found');
  }
  return temp;
  
};


/*
 * Complexity: What is the time complexity of the above functions?
 .add --> O(1) = constant
 .contains --> O(n) = linear
 .remove --> O(2n) = linear - loops through to find index, splices, then moves element over by 1.
 */
