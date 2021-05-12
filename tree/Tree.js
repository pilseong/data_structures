const readlineSync = require('readline-sync');


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
    const queue = new Queue();
    let input = readlineSync.question("Value of Root: ");
    this.root = new TreeNode(+input);
    queue.enqueue(this.root);

    let cur = null;
    while (!queue.isEmpty()) {
      cur = queue.dequeue();
      input = readlineSync.question(`Left value of ${cur.data}: `);
      if (+input !== -1) {
        cur.left = new TreeNode(+input);
        queue.enqueue(cur.left);
      }

      input = readlineSync.question(`Right value of ${cur.data}: `);
      if (+input !== -1) {
        cur.right = new TreeNode(+input);
        queue.enqueue(cur.right);
      }
    }
  }

  inorderRecursive(node) {
    if (node === null) return;

    this.inorderRecursive(node.left);
    console.log(node.data);
    this.inorderRecursive(node.right);
  }

  inorderIterative() {
    let cur = this.root;
    const stack = new Stack();

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

  preorderRecursive(node) {
    if (node === null) return;

    console.log(node.data);
    this.preorderRecursive(node.left);
    this.preorderRecursive(node.right);
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

  postorderRecursive(node) {
    if (node === null) return;

    this.postorderRecursive(node.left);
    this.postorderRecursive(node.right);
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
        cur = node.cur;

        if (node.order === 1) {
          stack.push({cur, order: 2});
          cur = cur.right;
        } else if (node.order === 2) {
          console.log(cur.data);
          // cur has to set to be null. because if the node has taken second time, 
          // cur is directing some node. not null
          cur = null;
        }
      }
    }
  }
}


class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}


class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(node, data) {
    if (node === null) {
      return new TreeNode(data);
    }

    if (data > node.data) {
      node.right = this.insert(node.right, data);
    } else {
      node.left = this.insert(node.left, data);
    }
    return node;
  }

  search(node, key) {
    if (node === null) return;

    if (node.data === key) {
      return node;
    } else if (node.data > key) {
      return this.search(node.left, key);
    } else if (node.data < key) {
      return this.search(node.right, key);
    }
  }

  getHeight(node) {
    if (node === null) return 0;

    const leftHeight = this.getHeight(node.left);
    const rightHeight = this.getHeight(node.right);

    return leftHeight > rightHeight ? leftHeight + 1 : rightHeight + 1;
  }

  delete(node, key) {
    if (node === null) return;

    if (node.data === key) {

    } else if (node.data > key) {
      this.delete(node.left);
    } else if (node.data < key) {
      this.delete(node.right);
    }
  }
}

const myBST = new BinarySearchTree();
myBST.root = myBST.insert(myBST.root, 20);
myBST.insert(myBST.root, 10);
myBST.insert(myBST.root, 30);
myBST.insert(myBST.root, 15);
myBST.insert(myBST.root, 5);
myBST.insert(myBST.root, 35);

console.log(JSON.stringify(myBST));
console.log(myBST.search(myBST.root, 11));
console.log(myBST.getHeight(myBST.root));


// const myTree = new BinaryTree();
// myTree.create();

// console.log("--- inorder ---")
// myTree.inorderRecursive(myTree.root);
// console.log("--- preorder ---")
// myTree.preorderRecursive(myTree.root);
// console.log("--- postorder ---")
// myTree.postorderRecursive(myTree.root);
// console.log("-- inorder iterative ---")
// myTree.inorderIterative();
// console.log("-- preorder iterative ---")
// myTree.preorderIterative();
// console.log("-- postorder iterative ---")
// myTree.postorderIterative();