var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.qSize = 0;
  this.addSize = 0;
  this.increment = 0;
  this.Storage = {};
  this.temp;
};

Queue.prototype.enqueue = function(value) {
  this.Storage[this.addSize] = value;
  this.qSize ++;
  this.addSize ++;
};

Queue.prototype.dequeue = function() {
  this.qSize --;
  this.temp = this.Storage[this.increment];
  delete this.Storage[this.increment];
  this.increment ++;
  return this.temp;
};

Queue.prototype.size = function() {
  if (this.qSize < 0) {
    this.qSize = 0;
  }
  return this.qSize;
};