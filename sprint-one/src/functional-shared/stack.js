
var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstantiation = {};
  newInstantiation.newStorage = {};
  newInstantiation.temp;
  newInstantiation.instanceSize = 0;
  _.extend(newInstantiation, stackMethods);
  return newInstantiation;
};

var stackMethods = {
  push: function(value) {
    this.newStorage[this.instanceSize] = value;
    this.instanceSize++;
  },

  pop: function() {
    this.instanceSize--;
    this.temp = this.newStorage[this.instanceSize];
    delete this.newStorage[this.instanceSize];
    return this.temp;

  },

  size: function() {
    if (this.instanceSize < 0) {
      this.instanceSize = 0;
    }
    return this.instanceSize;
  }

};


