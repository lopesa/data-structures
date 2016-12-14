var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var storageVal;
  var increment = 0;
  var addSize = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[addSize] = value;
    addSize ++;
    size ++;
  };

  someInstance.dequeue = function() {
    
    size --;
    storageVal = storage[increment];
    delete storage[increment];
    increment ++;
    return storageVal;
  };

  someInstance.size = function() {
    if (size < 0) {
      size = 0;
    }
    return size;
  };

  return someInstance;
};
