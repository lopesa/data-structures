var BinarySearchTree = function(value) {


  var tree = {};
  tree.value = value;
  tree.left = null;
  tree.right = null;
  _.extend(tree, BinarySearchTreeMethods);
  return tree;

};


var BinarySearchTreeMethods = {};

BinarySearchTreeMethods.insert = function(value) {
  var newNode = BinarySearchTree(value);


  var comparisonFunc = function(node) {
    if (value < node.value) { //do comparison and it's less
      if (node.left === null) { // and the left node doesn't exist
        node.left = newNode; //create node on the left side
      } else {
        comparisonFunc(node.left); //left node to compare the value with
      }  
    } else {
      
      if (node.right === null) {
        node.right = newNode;
      } else {
        comparisonFunc(node.right);
      }
    }   
  };
  comparisonFunc(this);

};

BinarySearchTreeMethods.contains = function(value) {
  var contains = false;
  // an inner function that takes a node

  var checkerFunc = function(node) {
    // compare the value to this node's value
    // if they are equal return true
    if (value === node.value) {
      contains = true;
      return contains;
    }

    // if value is less than this node's value && this node has left prop
      // call the function again with this node's left prop as argument
    if (value < node.value && node.left !== null) {
      checkerFunc(node.left);
    } else if (value > node.value && node.right !== null) {
      checkerFunc(node.right);
    }
    // if value is less than this node's value && this node has right prop
  };
      // call the function again with this node's right prop as argument
  checkerFunc(this);

  // call the inner function with "this" as the arg

  return contains;

};

BinarySearchTreeMethods.depthFirstLog = function(func) {
//create a inner function to allow recursion to take place   

  var applyFunc = function (node) {
  //apply the first node with function
    func(node.value);

  //if the left node exists, recurse it and apply func
    if (node.left !== null) {
      applyFunc(node.left);
    } 
    if (node.right !== null) {
      applyFunc(node.right);
    }
  //if the right node exists, recurse it and apply func
  };  
  applyFunc(this);
//call inner function using 'this'
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
