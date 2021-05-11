class Node {
  constructor(value, ahead, next) {
    this.value = value;
    this.ahead = ahead;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = new Node(-1, null, null);
    this.tail = this.head;
    this.size = 0;
  }

  // head -> 1 -> 2 -> 3
  // head -> 1 -> 2 -> 3 -> new
  // 1. create a new node
  // 2. set the new node
  // 3. set the last node
  // 4. set the tail
  append(value) {
    const new_node = new Node(value, null, null);
    new_node.ahead = this.tail;
    this.tail.next = new_node;
    this.tail = new_node;
    this.size++;
  }

  // head -> 1 -> 2
  // head -> new -> 1 -> 2
  // 1. set the new node
  // 2. set 1 node
  // 3. set the head
  prepend(value) {
    const new_node = new Node(value, null, null);
    new_node.ahead = this.head;
    new_node.next = this.head.next;
    if (this.head.next) this.head.next.ahead = new_node;
    this.head.next = new_node;
    this.size++;
  }

  // head <-> 0 <-> 1 <-> 2 <-> 3
  // head <-> 0 <-> new <-> 1 <-> 2 <-> 3
  // 1. create a new node
  // 2. set the new node
  // 3. set the next node
  // 4. set the before node
  insert(index, value) {
    if (index <= 0) this.prepend(value);
    else if (index >= this.size) this.append(value);
    else {
      const new_node = new Node(value, null, null);
      const target = this.searchWithIndex(index);

      new_node.ahead = target.ahead;
      new_node.next = target;
      target.ahead = new_node;
      new_node.ahead.next = new_node;
      this.size++;
    }

  }

  // head <-> 1 <-> 2
  // head <-> 2
  // 1. find the target node
  // 2. set the ahead node
  // 3. set the next node
  // 4. if the target is the same node with tail, then set the tail to the ahead node of the target
  // 5. release the target node
  remove(value) {
    let target = this.search(value);
    this._removeItem(target);
  }

  _removeItem(target) {
    if (target) {
      target.ahead.next = target.next;

      if (target === this.tail) {
        this.tail = target.ahead;
      } else {
        target.next.ahead = target.ahead;
      }

      target = null;
      this.size--;
    }
  }

  removeByIndex(index) {
    let target = this.searchWithIndex(index);
    this._removeItem(target)
  }

  search(value) {
    let cur = this.head.next;
    while (cur !== null) {
      if (cur.value === value) return cur;
      cur = cur.next;
    }
  }

  searchWithIndex(index) {
    let cur = this.head.next;
    for (let i=0; i<index; i++) {
      cur = cur.next;
    }
    return cur;
  }

  printList() {
    let cur = this.head.next;
    const result = [];
    while (cur !== null) {
      result.push(cur.value);
      cur = cur.next;
    }

    console.log(result)
    console.log(this.head.next)
    console.log(this.tail)
    console.log(`The size of the list is ${this.size}`)
  }
}


const list = new DoublyLinkedList();
list.append(10)
list.append(11)
list.append(12)
list.prepend(9)
list.prepend(8)

list.insert(0, 1);
list.insert(1, 2);
list.insert(3, 8.5)

list.removeByIndex(0)
list.removeByIndex(2)
// list.remove(10)
// list.remove(12)
// list.remove(8)
// list.remove(9)
// list.remove(11)

list.printList()

