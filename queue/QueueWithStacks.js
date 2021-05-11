const { Stack, Node } = require('../stack/Stack')

// two stacks are used as inStack and outStack
class Queue {
  constructor() {
    this.inStack = new Stack();
    this.outStack = new Stack();
  }

  enqueue(value) {
    this.inStack.push(value)
  }

  // if the out-stack is empty, then copy all the items from in stack
  dequeue() {
    if (!this.outStack.isEmpty()) {
      return this.outStack.pop();
    } else if (this.outStack.isEmpty() && !this.inStack.isEmpty()) {
      this._moveItemToOutStack();
      return this.outStack.pop()
    } else {
      return null;
    }
  }

  _moveItemToOutStack() {
    const numOfInStack = this.inStack.size;
    for (let i = 0; i < numOfInStack; i++) {
      this.outStack.push(this.inStack.pop());
    }
  }

  peek() {
    if (!this.outStack.isEmpty()) {
      return this.outStack.peek();
    } else if (this.outStack.isEmpty() && !this.inStack.isEmpty()) {
      this._moveItemToOutStack();
      return this.outStack.peek()
    } else {
      return null;
    }
  }

  isEmpty() {
    return this.inStack.size + this.outStack.size === 0;
  }

  size() {
    return this.inStack.size + this.outStack.size;
  }
}

const queue = new Queue();
queue.enqueue(1)
console.log(JSON.stringify(queue))
queue.enqueue(2)
console.log(JSON.stringify(queue))
queue.enqueue(3)
console.log(JSON.stringify(queue))
queue.enqueue(4)
console.log(JSON.stringify(queue))
queue.enqueue(5)
console.log(JSON.stringify(queue))

console.log(queue.peek())
console.log(JSON.stringify(queue))
console.log(queue.dequeue())
console.log(JSON.stringify(queue))
queue.enqueue(6);
console.log(JSON.stringify(queue))
console.log(queue.dequeue())
console.log(JSON.stringify(queue))
queue.enqueue(7);
console.log(JSON.stringify(queue))
console.log(queue.dequeue())
console.log(JSON.stringify(queue))
console.log(queue.dequeue())
console.log(JSON.stringify(queue))
console.log(queue.dequeue())
console.log(JSON.stringify(queue))
console.log(queue.dequeue())
console.log(JSON.stringify(queue))
console.log(queue.dequeue())
console.log(JSON.stringify(queue))
console.log(queue.dequeue())
console.log(JSON.stringify(queue))


// /**
//  * Initialize your data structure here.
//  */
//  var MyQueue = function() {
//   this.inStack = new Stack();
//   this.outStack = new Stack();    
// };

// /**
// * Push element x to the back of queue. 
// * @param {number} x
// * @return {void}
// */
// MyQueue.prototype.push = function(x) {
//   this.inStack.push(x)
// };

// MyQueue.prototype._moveItemToOutStack = function() {
//   const numOfInStack = this.inStack.size;
//   for (let i = 0; i < numOfInStack; i++) {
//     this.outStack.push(this.inStack.pop());
//   }
// };

// /**
// * Removes the element from in front of queue and returns that element.
// * @return {number}
// */
// MyQueue.prototype.pop = function() {
//   if (!this.outStack.isEmpty()) {
//     return this.outStack.pop();
//   } else if (this.outStack.isEmpty() && !this.inStack.isEmpty()) {
//     this._moveItemToOutStack();
//     return this.outStack.pop()
//   } else {
//     return null;
//   }
// };

// /**
// * Get the front element.
// * @return {number}
// */
// MyQueue.prototype.peek = function() {
//   if (!this.outStack.isEmpty()) {
//     return this.outStack.peek();
//   } else if (this.outStack.isEmpty() && !this.inStack.isEmpty()) {
//     this._moveItemToOutStack();
//     return this.outStack.peek()
//   } else {
//     return null;
//   }
// };

// /**
// * Returns whether the queue is empty.
// * @return {boolean}
// */
// MyQueue.prototype.empty = function() {
//   return this.inStack.size + this.outStack.size === 0;
// };

// class Node {
// constructor(value, next) {
//   this.value = value;
//   this.next = next;
// }
// }

// class Stack {
// constructor () {
//   this.top = null;
//   this.bottom = null;
//   this.size = 0;
// }

// peek() {
//   if (!this.isEmpty()) {
//     return this.top.value;
//   }
// }
  
// pop() {
//   if (!this.isEmpty()) {
//     const target = this.top;
//     this.top = this.top.next;
//     if (this.size === 1) {
//       this.bottom = null;
//     }
//     this.size--;
//     return target.value;
//   }
// }

// push(value) {
//   const new_node = new Node(value, null);
//   new_node.next = this.top;
//   this.top = new_node;
//   if (this.isEmpty()) {
//     this.bottom = new_node;
//   }
//   this.size++;
// }

// isEmpty() {
//   return this.size === 0 ? true : false;
// }

// printStack() {
//   let cur = this.first;
//   const result = [];

//   while (cur != null) {
//     result.push(cur.value);
//     cur = cur.next;
//   }
//   console.log(result)
// }
// }

// /** 
// * Your MyQueue object will be instantiated and called as such:
// * var obj = new MyQueue()
// * obj.push(x)
// * var param_2 = obj.pop()
// * var param_3 = obj.peek()
// * var param_4 = obj.empty()
// */