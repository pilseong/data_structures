const { Queue, Stack, Node } = require('./BinaryTreeCreation');
var readlineSync = require('readline-sync');

class TreeNode {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    if (this.root === null) {
      this.root = new TreeNode(data);
      return;
    }

    this._insert(this.root, data);
  }

  _insert(node, data) {
    if (node === null) {
      return new TreeNode(data);
    }

    if (node.data > data) {
        node.left = this._insert(node.left, data);
    } else {
        node.right = this._insert(node.right, data)
    }
    return node;
  }

  initial(queue) {
    let node = null;

    while (!queue.isEmpty()) {
      node = queue.dequeue();
      this.insert(node);
    }
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

  traversePreorder(node) {
    if (node === null) return;

    console.log(node.data);
    this.traversePreorder(node.left);
    this.traversePreorder(node.right);
  }

  traverseInorder(node) {
    if (node === null) return;

    this.traverseInorder(node.left);
    console.log(node.data);
    this.traverseInorder(node.right);
  }  
}

const myQueue = new Queue();
myQueue.enqueue(40);
myQueue.enqueue(50);
myQueue.enqueue(60);
myQueue.enqueue(70);
myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);

const tree = new BinaryTree();
tree.initial(myQueue)
// tree.insert(40);
// tree.insert(50);
// tree.insert(60);
// tree.insert(10);
// tree.insert(20);
// tree.insert(30);

console.log("preorder S----")
tree.traversePreorder(tree.root);
console.log("preorder E----")
console.log("Inorder S----")
tree.traverseInorder(tree.root);
console.log("Inorder E----")

console.log(JSON.stringify(tree));