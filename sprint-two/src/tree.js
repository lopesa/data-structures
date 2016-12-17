var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {  
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var contains = false;

  var search = function(tree) {


    if (tree.value === target) {
      contains = true;
    } else {
      tree.children.forEach(function(child) {
        search(child);
      });
    
    }
  };
  search(this);

  return contains;
};


/*
 * Complexity: What is the time complexity of the above functions?
 .addChild --> O(1) = constant
 .conatains --> O(n) = linear
 */
