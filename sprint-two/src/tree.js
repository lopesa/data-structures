var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  //.log("newarray" , newTree.children);
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {  
  //console.log()
  this.children.push(Tree(value));
  //console.log("array inside" , this.children);
};

treeMethods.contains = function(target) {
  console.log(this.value);
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

//console.log(Tree(3));
console.log(Tree(3).addChild());

/*
 * Complexity: What is the time complexity of the above functions?
 */
