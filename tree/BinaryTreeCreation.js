var readlineSync = require('readline-sync');

class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  create() {
    let input = null;
    let node = null;
    let cur = null;

    const queue = new Queue();
    input = readlineSync.question("Root Node Value: ");
    this.root = new TreeNode(+input);

    queue.enqueue(this.root);

    while (!queue.isEmpty()) {
      cur = queue.dequeue();

      input = readlineSync.question(`Left Value of ${cur.data}: `);
      if (input !== '-1') {
        node = new TreeNode(+input);
        cur.left = node;
        queue.enqueue(node);
      } else cur.left = null;

      input = readlineSync.question(`Right Value of ${cur.data}: `);
      if (input !== '-1') {
        node = new TreeNode(+input);
        cur.right = node;
        queue.enqueue(node);
      } else cur.right = null;
    }
  }

  inorderTraverse(node) {
    if (node === null) return;

    this.inorderTraverse(node.left);
    console.log(node.data);
    this.inorderTraverse(node.right);
  }

  inorderIterative() {
    const stack = new Stack();
    let cur = this.root;

    while (cur !== null || !stack.isEmpty()) {
      if (cur !== null) {
        stack.push(cur);
        cur = cur.left;
      } else {
        cur = stack.pop();
        console.log(cur.data);
        cur = cur.right;
      }
    }
  }

  preorderTraverse(node) {
    if (node === null) return;

    console.log(node.data);
    this.preorderTraverse(node.left);
    this.preorderTraverse(node.right);
  }

  preorderIterative() {
    let cur = this.root;
    const stack = new Stack();

    while (cur !== null || !stack.isEmpty()) {
      if (cur !== null) {
        console.log(cur.data);
        stack.push(cur);
        cur = cur.left;
      } else {
        cur = stack.pop();
        cur = cur.right;
      }
    }
  }


  postorderTraverse(node) {
    if (node === null) return;

    this.postorderTraverse(node.left);
    this.postorderTraverse(node.right);
    console.log(node.data);
  }

  postorderIterative() {
    let cur = this.root;
    let node = null;
    const stack = new Stack();

    while (cur !== null || !stack.isEmpty()) {
      if (cur !== null) {
        stack.push({cur, order: 1});
        cur = cur.left;
      } else {
        node = stack.pop();
        if (node.order === 1) {
          stack.push({cur: node.cur, order: 2});
          cur = node.cur.right;
        } else {
          console.log(node.cur.data);
        }
      }
    }
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }


  // push
  enqueue(data) {
    const node = new Node(data);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  // pop
  dequeue() {
    if (this.isEmpty()) {
      return false;
    } else {
      const target = this.head;
      this.head = this.head.next;
      target.next = null;
      if (this.size === 1) {
        this.tail = null;
      }
      this.size--;
      return target.data;
    }
  }

  isEmpty() {
    return this.size === 0;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }


  push(data) {
    const node = new Node(data);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      return false;
    } else {
      const target = this.head;
      this.head = this.head.next;
      target.next = null;
      if (this.size === 1) {
        this.tail = null;
      }
      this.size--;
      return target.data;
    }
  }

  isEmpty() {
    return this.size === 0;
  }
}
// const myTree = new BinaryTree();
// myTree.create();

// console.log(JSON.stringify(myTree));

// console.log("Inorder S----")
// myTree.inorderTraverse(myTree.root);
// console.log("Inorder E----")
// console.log("Inorder Iterative S----")
// myTree.inorderIterative();
// console.log("Inorder Iterative E----")
// console.log("preorder S----")
// myTree.preorderTraverse(myTree.root);
// console.log("preorder E----")
// console.log("preorder Iteravtice S----")
// myTree.preorderIterative();
// console.log("preorder Iteravtice E----")
// console.log("postorder S----")
// myTree.postorderTraverse(myTree.root);
// console.log("postorder E----")
// console.log("postorder Iteravtice S----")
// myTree.postorderIterative();
// console.log("postorder Iteravtice E----")


module.exports = {
  Stack, Queue, Node
}

// const myStack = new Stack();
// myStack.push(1);
// myStack.push(2);
// console.log(JSON.stringify(myStack));
// myStack.pop();
// myStack.pop();
// console.log(JSON.stringify(myStack));