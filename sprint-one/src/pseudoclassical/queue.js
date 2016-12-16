var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.qSize = 0;
  this.lastIndex = 0;
  this.firstIndex = 0;
  this.Storage = {};
  this.temp;
};

Queue.prototype.enqueue = function(value) {
  this.Storage[this.lastIndex] = value;
  this.qSize ++;
  this.lastIndex ++;
};

Queue.prototype.dequeue = function() {
  this.qSize --;
  this.temp = this.Storage[this.firstIndex];
  delete this.Storage[this.firstIndex];
  this.firstIndex ++;
  return this.temp;
};

Queue.prototype.size = function() {
  if (this.qSize < 0) {
    this.qSize = 0;
  }
  return this.qSize;
};