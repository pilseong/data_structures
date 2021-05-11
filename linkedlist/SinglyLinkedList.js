const { Node } = require('../hashtable/hashtable')

class SinglyLinkedList {
  constructor() {
    this.head = new Node(-1, null);
    this.tail = this.head;
    this.size = 0;
  }

  // head -> new -> 'a' -> 'b'
  // 1. create new Node
  // 2. set the new Node
  // 3. set the head node
  prepend(value) {
    const new_node = new Node(value, null);
    new_node.next = this.head.next;
    this.head.next = new_node;
    this.size++;
  }

  // head -> 'a' -> 'b' -> new
  // 1. create new Node
  // 2. set the new Node -> nothing to do
  // 3. set the tail node
  append(value) {
    const new_node = new Node(value, null);
    this.tail.next = new_node;
    this.tail = new_node;
    this.size++;
  }

  // head -> 'a' -> 'b' -> new -> 'c'
  // 1. create the new node
  // 2. find the previous node of the node in the position
  // 3. set the new node
  // 4. set the prev node
  insert(index, value) {
    if (!index) return;

    if (index <= 0) {
      this.prepend(value);
    } else if (index >= this.size) {
      this.append(value);
    } else {
      const new_node = new Node(value, null);
      const pre = this.findByIndex(index-1);
      new_node.next = pre.next;
      pre.next = new_node;
      this.size++;
    }
  }

  // normally we set the index is index - 1 to fetch the previous node
  findByIndex(index) {
    if (index === -1) return this.head;

    let cur = this.head.next;

    for (let i=0; i < index; i++) {
      cur = cur.next;
    }
    return cur;
  }

  // we need the previous node if we want something to do with the singly linked list
  findByValuePreNode(value) {
    let pre = this.head;
    let cur = this.head.next;

    while (cur != null) {
      if (cur.value === value) {
        return pre;
      }
      pre = pre.next;
      cur = cur.next;
    } 
  }

  // head -> 'a' -> 'b' -> 'c'
  // head -> 'a' -> 'c'
  // set the previous node
  // free the target node
  removeByIndex(index) {
    if (index < 0 || index >= this.size) return; 

    const pre = this.findByIndex(index-1);
    this._removeNode(pre);
  } 

  _removeNode(pre) {
    // if the target is the last node, then have to set the tail
    if (this.tail === pre.next) {
      this.tail = pre;
    }
    pre.next = pre.next.next;
    this.size--;
  }

  remove(value) {
    const pre = this.findByValuePreNode(value);
    this._removeNode(pre);
  }

  // 1. find the two nodes from the last
  // 2. set the second node point to the first node
  // 3. go to step and do it with the two nodes from the last - 1;
  reverse() {
    let first = null;
    const last = this.head.next;

    for (let i=this.size-1; i >= 0; i--) {
      const prev = this.findByIndex(i-1);
      if (i === this.size-1) first = prev.next;
      prev.next.next = prev;
      if (prev === this.head) {
        prev.next.next = null;
      }
    }
    this.head.next = first;
    this.tail = last;
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

const list = new SinglyLinkedList();
list.append(1);
list.append(2)
list.reverse();
list.printList()


// list.append(5)
// list.append(6)
// list.append(7)
// list.append(8)

// list.prepend(4)
// list.prepend(3)
// list.prepend(2)
// list.prepend(1)

// list.insert(1, 1.5)
// list.insert(3, 2.5)
// list.insert(11, 9)

// list.remove(9);
// list.remove(5);

// list.removeByIndex(0)
// list.removeByIndex(2)

// list.printList()

// list.reverse();
// console.log(JSON.stringify(list));
// list.printList();

// list.reverse();
// console.log(JSON.stringify(list));
// list.printList();