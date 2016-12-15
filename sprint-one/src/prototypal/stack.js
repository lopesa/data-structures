var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.stSize = 0;
  obj.storage = {};
  obj.temp;

  return obj;
};



// Stack.prototype.size = function() {
//   return 0;

// };

var stackMethods = {

  push: function(value) {
    this.storage[this.stSize] = value;
    this.stSize ++;


  },

  pop: function() {
    this.stSize--;
    this.temp = this.storage[this.stSize];
    delete this.storage[this.stSize];
    return this.temp;
  },

  size: function() { 
    if (this.stSize < 0) {
      this.stSize = 0;
    }
    return this.stSize; 
  }

};


