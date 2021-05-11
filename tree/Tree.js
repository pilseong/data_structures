
// tail  ----->   head
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // put data from tail
  enqueue(data) {
    const node = new Node(data);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  // fetch data from head
  dequeue() {
    if (!this.isEmpty()) {
      let returnNode = this.head;

      if (this.size === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
      }
      returnNode.next = null;
      this.size--;

      return returnNode.data;
    }
  }

  isEmpty() {
    return this.size === 0 ? true : false;
  }
}

// [    <----
class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // put data to the head
  push(data) {
    const node = new Node(data);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  //fetch data from the head
  pop() {
    if (!this.isEmpty()) {
      const returnNode = this.head;
      if (this.size === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
      }
      this.size--;
      returnNode.next = null;
      return returnNode.data;
    }
  }

  isEmpty() {
    return this.size === 0 ? true : false;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class BinaryTree {

  constructor() {
    this.root = null;
  }

  create() {
    
  }

}

class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}