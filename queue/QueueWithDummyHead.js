class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = new Node(-1);
    this.tail = this.head;
    this.size = 0;
  }

  // head -> new -> 1 -> 2
  // 1. create new node
  // 2. set the new node
  // 3. set the head node
  enqueue(value) {
    const new_node = new Node(value);
    new_node.next = this.head.next;

    this.head.next = new_node;
    if (this.size === 0) this.tail = new_node;

    this.size++;
  }

  // head -> 1 -> 2
  // head -> 1
  // 1. find the pre node of the last node
  // 2. save the last node in the temp
  // 3. set the next of the pre node to null
  // 4. set the tail to the pre node
  // 5. if it were the last item in the queue, then tail should point to the head node  
  dequeue() {
    if (!this.isEmpty()) {
      // index starts from 0 and we need pre node of the last node
      const pre = this.findByIndex(this.size-2);
      const result = pre.next;
      pre.next = null;
      this.tail = pre;

      if (this.size === 1) {
        this.tail = this.head;
      }

      this.size--;
      return result.value;
    }
  }

  peek() {
    if (this.size > 0) return this.head.next.value
  }

  // head -> 0 -> 1 -> 2
  findByIndex(index) {
    if (index === -1) return this.head;

    let cur = this.head.next;

    for (let i=0; i<index; i++) {
      cur = cur.next;
    }

    return cur;
  }

  isEmpty() {
    return this.size === 0 ? true : false;
  }

  printList() {
    let cur = this.head.next;
    const result = [];
    
    while (cur != null) {
      result.push(cur.value);
      cur = cur.next;
    }

    console.log(result)
  }
}


const queue = new Queue();
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
console.log(queue.peek())
queue.enqueue(5)
console.log(JSON.stringify(queue))

queue.dequeue()
console.log(JSON.stringify(queue))
queue.dequeue()
console.log(JSON.stringify(queue))
queue.dequeue()
console.log(JSON.stringify(queue))
queue.dequeue()
console.log(JSON.stringify(queue))
queue.dequeue()
console.log(JSON.stringify(queue))
