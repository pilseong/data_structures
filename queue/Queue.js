class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    const new_node = new Node(value);
    if (this.size === 0) {
      this.first = new_node;
      this.last = this.first;
    } else {
      this.last.next = new_node;
      this.last = new_node;
    }
    this.size++;
  }

  dequeue() {
    if (this.first != null) {
      const temp = this.first;
      if (this.size === 1) {
        this.first = null;
        this.last = null;
      } else {
        this.first = this.first.next;
      }
      this.size--;
      temp.next = null;
      return temp.value;
    }
  }

  peek() {
    return this.size > 0 ? this.first.value : undefined;
  }

  printQueue() {
    let cur = this.first;
    const result = [];

    while (cur != null) {
      result.push(cur.value);
      cur = cur.next;
    }
    console.log(result)
  }
}

module.exports = {
  Queue,
};

// const queue = new Queue();
// queue.enqueue(1)
// console.log(JSON.stringify(queue))
// queue.enqueue(2)
// console.log(JSON.stringify(queue))
// queue.enqueue(3)
// console.log(JSON.stringify(queue))
// queue.enqueue(4)
// console.log(JSON.stringify(queue))
// queue.enqueue(5)
// console.log(JSON.stringify(queue))

// queue.dequeue()
// console.log(JSON.stringify(queue))
// queue.dequeue()
// console.log(JSON.stringify(queue))
// queue.dequeue()
// console.log(JSON.stringify(queue))
// queue.dequeue()
// console.log(JSON.stringify(queue))
// queue.dequeue()
// console.log(JSON.stringify(queue))

