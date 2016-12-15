var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.qSize = 0;
  obj.Storage = {};
  obj.increment = 0;
  obj.addSize = 0;
  obj.temp;

  return obj;
};

var queueMethods = {

  enqueue: function(value) {
    this.qSize ++;
    this.Storage[this.addSize] = value;
    this.addSize ++;

  },

  dequeue: function() {
    this.qSize --;
    this.temp = this.Storage[this.increment];
    delete this.Storage[this.increment];
    this.increment ++;
    return this.temp;
  },

  size: function() {
    if (this.qSize < 0) {
      this.qSize = 0;
    }
    return this.qSize;
  }
};


