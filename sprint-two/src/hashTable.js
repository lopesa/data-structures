

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // this._storage.set(index, v);
  var duple = [k, v];
  
  if (this._storage.get(index) === undefined) {
    var arrayAtKey = [];
  } else {
    arrayAtKey = this._storage.get(index);
  }

  arrayAtKey.push(duple);
  this._storage.set(index, arrayAtKey);
  // }
  // console.log('this._storage', this._storage)
  //console.log(this._storage.get(index)[0][0]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var retrieval;
  // return this._storage.get(index);
  //return this._storage.get(index)[1];
  //console.log('this._storage.get(index)', this._storage.get(index));


  this._storage.get(index).forEach(function(item) {
    // console.log(item);
    // console.log(item[1]);
    if (item[0] === k) {
      retrieval = item[1];
    }
  });

  return retrieval;
  // return this._storage.get(index)[0][1];
  // console.log('this._storage.get(index)[0]', this._storage.get(index)[0])
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.get(index).forEach(function(item) {
    if (item[0] === k) {
      item[1] = undefined;
    }
  });
  //this._storage.set(index, [k, undefined]);
  // this.stroage.set(index, )
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


