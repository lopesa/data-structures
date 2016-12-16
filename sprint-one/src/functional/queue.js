var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var storageVal;
  var firstIndex = 0;
  var lastIndex = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[lastIndex] = value;
    lastIndex ++;
    size ++;
  };

  someInstance.dequeue = function() {
    
    size --;
    storageVal = storage[firstIndex];
    delete storage[firstIndex];
    firstIndex ++;
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
