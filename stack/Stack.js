class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor () {
    this.top = null;
    this.bottom = null;
    this.size = 0;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.top.value;
    }
  }

  pop() {
    if (!this.isEmpty()) {
      const target = this.top;
      this.top = this.top.next;
      if (this.size === 1) {
        this.bottom = null;
      }
      this.size--;
      return target.value;
    }
  }

  push(value) {
    const new_node = new Node(value, null);
    new_node.next = this.top;
    this.top = new_node;
    if (this.isEmpty()) {
      this.bottom = new_node;
    }
    this.size++;
  }
  
  isEmpty() {
    return this.size === 0 ? true : false;
  }

  printStack() {
    let cur = this.first;
    const result = [];

    while (cur != null) {
      result.push(cur.value);
      cur = cur.next;
    }
    console.log(result)
  }
}

exports.Node = Node;
exports.Stack = Stack;

// const stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// stack.push(5);

// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());

// console.log(JSON.stringify(stack))

// stack.push(1);
// console.log(JSON.stringify(stack))

// console.log(stack.peek());