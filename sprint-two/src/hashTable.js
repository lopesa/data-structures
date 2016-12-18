

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var duple = [k, v];
  
  if (this._storage.get(index) === undefined) {
    var arrayAtKey = [];
  } else {
    arrayAtKey = this._storage.get(index);
  }

  arrayAtKey.push(duple);
  this._storage.set(index, arrayAtKey);
  // }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var retrieval;

  // console.log(this._storage.get(index))
  if (this._storage.get(index) !== undefined) {
    this._storage.get(index).forEach(function(item) {
      // console.log(item);
      // console.log(item[1]);
      if (item[0] === k) {
        retrieval = item[1];
      }
    });
  }

  return retrieval;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.get(index).forEach(function(item) {
    if (item[0] === k) {
      item[1] = undefined;
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 .insert --> O(1) = constant
 .retrieve --> O(1) = constant
 .remove --> 0(1) = constant
 */


