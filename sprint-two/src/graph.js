

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
  this.numOfNodes = 0;

  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var addNode = {
    value: node,
    edgesFrom: null,
    edgesTo: null
  };
  this.nodes[this.numOfNodes] = addNode;
  this.numOfNodes ++;

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var contained = false;
  _.each(this.nodes, function(child) {
    if (child.value === node) {
      contained = true;
    }
  });
  return contained;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.numOfNodes; i++) {
    if (this.nodes[i].value === node) {
      delete this.nodes[i];
    }
  }
  this.numOfNodes --;

  // _.each(this.nodes, function(child, key) {
  //   if (child.value === node) {
  //     console.log("hi" , child);
  //     console.log("hello" , key);
  //     delete this.nodes.key;
  //   }
  // });
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


