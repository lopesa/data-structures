

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
  this.numOfNodes = 0;

  this.edges = {};
  this.numOfEdges = 0;
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

  for (var j = 0; j < this.numOfEdges; j++) {
    if (this.edges[j].fromNode === node || this.edges[j].toNode === node) {
      delete this.edges[j];
      this.numOfEdges --;
    }
  }
  this.numofNodes--;

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var hasEdge = false;
  _.each(this.edges, function(edge) {
    if ((edge.fromNode === fromNode || edge.fromNode === toNode) 
      && (edge.toNode === toNode || edge.toNode === fromNode)) {
      hasEdge = true;
    }
  });
  //console.log("hasEdge " + fromNode + " " + toNode + " " + hasEdge);
  return hasEdge;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var edge = {
    fromNode: fromNode,
    toNode: toNode
  };
  this.edges[this.numOfEdges] = edge;
  this.numOfEdges++;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var j = 0; j < this.numOfEdges; j++) {
    if ((this.edges[j].fromNode === fromNode || this.edges[j].fromNode === toNode)
     && (this.edges[j].toNode === toNode || this.edges[j].toNode === fromNode)) {
      delete this.edges[j];
      this.numOfEdges --;
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.numOfNodes; i++) {
    cb(this.nodes[i].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


