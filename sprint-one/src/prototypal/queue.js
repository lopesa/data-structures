var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.qSize = 0;
  obj.Storage = {};
  obj.firstIndex = 0;
  obj.lastIndex = 0;
  obj.temp;

  return obj;
};

var queueMethods = {

  enqueue: function(value) {
    this.qSize ++;
    this.Storage[this.lastIndex] = value;
    this.lastIndex ++;

  },

  dequeue: function() {
    this.qSize --;
    this.temp = this.Storage[this.firstIndex];
    delete this.Storage[this.firstIndex];
    this.firstIndex ++;
    return this.temp;
  },

  size: function() {
    if (this.qSize < 0) {
      this.qSize = 0;
    }
    return this.qSize;
  }
};


