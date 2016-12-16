var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instantiation = {};

  _.extend(instantiation, queueMethods);

  instantiation.objSize = 0;
  instantiation.firstIndex = 0;
  instantiation.lastIndex = 0;
  instantiation.storage = {};
  instantiation.tempSto;
  return instantiation;
};

var queueMethods = {
  enqueue: function(value) {
    this.objSize ++;
    this.storage[this.lastIndex] = value;
    this.lastIndex++;
  },
  dequeue: function() {
    this.objSize --;
    this.tempSto = this.storage[this.firstIndex];
    delete this.storage[this.firstIndex];
    this.firstIndex ++;
    return this.tempSto;
  },
  size: function() {
    if (this.objSize < 0) {
      this.objSize = 0;
    }
    return this.objSize;
  }
};


