var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  return obj;
};

Stack.prototype.push = function() {

};

Stack.prototype.pop = function() {

};

// Stack.prototype.size = function() {
//   return 0;

// };

var stackMethods = {

  size: function() {   return 0;}
};


