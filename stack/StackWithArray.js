class Stack {
  constructor() {
    this.data = []
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  pop() {
    return this.data.pop();
  }

  push(value) {
    this.data.push(value)
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);


console.log(stack.data);

console.log(stack.pop());

console.log(stack.data);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

console.log(JSON.stringify(stack))

stack.push(1);
console.log(JSON.stringify(stack))

console.log(stack.peek());