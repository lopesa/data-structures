var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.stackSize = 0;
  this.storage = {};
  this.temp;

 
};


Stack.prototype.push = function(value) {
  this.storage[this.stackSize] = value;
  this.stackSize ++;
};

Stack.prototype.pop = function() {
  this.stackSize --;
  this.temp = this.storage[this.stackSize];
  delete this.storage[this.stackSize];
  return this.temp;

};

Stack.prototype.size = function() {
  if (this.stackSize < 0) {
    this.stackSize = 0;
  }
  return this.stackSize;
};