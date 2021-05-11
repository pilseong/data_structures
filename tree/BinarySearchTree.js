class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // 1. compare with the value
  //   1-1 inserting value is less than the target value, then go to left node
  //   1-2.inserting value is large than the target value, then go to right node 
  // 2. if the next node is null then put the value in the node
  //   2-1 if it is not null, then go to step 1
  insert(value) {
    const node = new Node(value);

    if (this.root === null) {
      this.root = node;
    } else {
      this._insert(node, this.root);
    }

  }

  // base condition, found null than assign
  _insert(node, compareNode) {
    if (compareNode.value > node.value) {
      if (compareNode.left === null) {
        compareNode.left = node;
        return;
      }
      this._insert(node, compareNode.left);
    } else {
      if (compareNode.right === null) {
        compareNode.right = node;
        return;
      }
      this._insert(node, compareNode.right);
    }
  }

  lookup(value) {
    if (value === null) return;

    return this._lookup(value, this.root);

  }

  // if the compareNode is null, then not found
  _lookup(value, compareNode) {

    if (compareNode === null) return null;

    if (value === compareNode.value) {
      return compareNode;
    } else if (value < compareNode.value) {
      return this._lookup(value, compareNode.left);
    } else {
      return this._lookup(value, compareNode.right);
    }
  }

  // 1. find the target
  // 2. remove the node and replace with children if they exists
  //   2.1 there is no child, then just remove the node from parent
  //   2.2 there is only one child, then replace the target with the only child
  //   2.3 there are two children, then find the smallest on the right tree or the biggest value on the left tree 
  //     and replace the target with the child node. the replaced child must be leap or having single child, so we can remove it with 2.1 or 2.2 step
  remove(value) {
    if (this.root === null) return;

    let cur = this.root;
    let parent = null;
    while (cur !== null) {
      if (cur.value === value) {
        this._remove(parent, cur)
        break;
      } else if (cur.value > value) {
        parent = cur;
        cur = cur.left;
      } else {
        parent = cur;
        cur = cur.right;
      }
    }
  }

  _remove(parent, cur) {
    // if it is a leaf
    if (cur.left === null && cur.right === null) {

      // removing root node. empty tree
      if (parent === null) {
        this.root = null;
        return;
      }

      if (parent.left === cur) parent.left = null;
      if (parent.right === cur) parent.right = null;

    // only one child exists
    } else if (cur.left === null || cur.right === null) {

      // removing root node
      if (parent === null) {
        if (cur.left !== null) this.root = cur.left;
        else this.root = cur.right;
        return;
      }

      if (parent.left === cur) {
        if (cur.left !== null) parent.left = cur.left;
        if (cur.right !== null) parent.left = cur.right;
      } else if (parent.right === cur) {
        if (cur.left !== null) parent.right = cur.left;
        if (cur.right !== null) parent.right = cur.right;
      }

    // both children exist
    } else {
      // find the smallest on the right
      let temp = cur.right;
      let temp_parent = cur;
      while (temp.left !== null) {
        temp_parent = temp;
        temp = temp.left;
      }
      cur.value = temp.value;
      // delete copied node
      this._remove(temp_parent, temp);
    }
  }

  inorder(root) {
    if (root === null) {
      return;
    }

    this.inorder(root.left);
    console.log(" " + root.value);
    this.inorder(root.right);
  }
}

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}



const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.inorder(tree.root);

// tree.remove(9);
// tree.remove(20);
// tree.remove(4);
// tree.remove(6);
// tree.remove(1);
// tree.remove(15);
// tree.remove(170);
// console.log(JSON.stringify(tree.root));
// console.log(tree.lookup(4))
// console.log(tree.lookup(170))


