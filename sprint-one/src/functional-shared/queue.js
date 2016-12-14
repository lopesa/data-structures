var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instantiation = {};

  _.extend(instantiation, queueMethods);

  instantiation.objSize = 0;
  instantiation.increment = 0;
  instantiation.addInc = 0;
  instantiation.storage = {};
  instantiation.tempSto;
  return instantiation;
};

var queueMethods = {
  enqueue: function(value) {
    this.objSize ++;
    this.storage[this.addInc] = value;
    this.addInc++;
  },
  dequeue: function() {
    this.objSize --;
    this.tempSto = this.storage[this.increment];
    delete this.storage[this.increment];
    this.increment ++;
    return this.tempSto;
  },
  size: function() {
    if (this.objSize < 0) {
      this.objSize = 0;
    }
    return this.objSize;
  }
};


