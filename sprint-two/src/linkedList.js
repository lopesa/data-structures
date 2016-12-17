var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.counter = 0;
  //list.array = [];

  list.addToTail = function(value) {
    
    // when we add a new tail
    var newNode = Node(value);
    list.counter++;

    // if the list isn't empty
    // we assign the head here too
    if (!list.tail) {
      list.head = newNode;
    }

    // if there is already a tail
    // take the old tail and link it to the new tail
    if (list.tail) {
      list.tail.next = newNode;
    }

    //make the new node the tail
    list.tail = newNode;

  };

  list.removeHead = function() {

    // take the value the current head points to
    // and make that the current head
    var tempVar = list.head.value;
    list.head = list.head.next;
    list.counter --;
    return tempVar;

  };

  list.contains = function(target) {
    //using the while loop current next value !== null (list.head)
    //ie, we are noton the last node
    var newCount = list.counter;
    var pointer = list.head;
    while (newCount > 0) { // can also execute by setting it while the value doesn'e equal to null rather than incrementing
      if (pointer.value === target) {
       
        return true;
      } 
      newCount --;
      if (pointer.next !== null) {
        pointer = pointer.next;
      }
    }
    return false;
  };

  return list;
};


var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addToTail --> O(1) = constant;
 removeHead --> O(1) = constant;
 contains --> O(n) = linear
 */
