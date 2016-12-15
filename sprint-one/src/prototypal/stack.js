var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.stSize = 0;

  return obj;
};



// Stack.prototype.size = function() {
//   return 0;

// };

var stackMethods = {

  push: function() {
    this.stSize ++;

  },

  pop: function() {
    this.stSize--;
  },

  size: function() { 
    return this.stSize; 
  }

};


