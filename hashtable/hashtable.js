class Hashtable {
  constructor(bucket_size) {
    this.list = new Array(bucket_size);
    this.bucket_size = bucket_size;
    this.size = 0;
  }

  put (key, value) {
    const hash = this._getHash(key)

    if (this.list[hash]) {
      this.list[hash].append([key, value])
    } else {
      this.list[hash] = new LinkedList()
      this.list[hash].append([key, value])
    }
    this.size++;
  }

  get(key) {
    const hash = this._getHash(key);
    if (this.list[hash]) {
      return this.list[hash].search(key, function(key1, key2) {
        return key1[0] === key2
      });
    }
  }

  remove(key) {
    const hash = this._getHash(key);
    if (this.list[hash]) {
      if (this.list[hash].remove(key, function(key1, key2) {
        return key1[0] === key2
      })) {
        this.size--;
      }
    }
  }

  _getHash (key) {
    let index = key.length
    for (let i=0; i<key.length; i++) {
      index = (index + key.charCodeAt(i)) * i;
    }
    // console.log(`index: ${index}`)
    index = index % this.bucket_size;
    return index;
  }
}

// value can be anything
class Node {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}

// This linkedlist always has the head node
class LinkedList {
  constructor() {
    this.head = new Node(-1, null)
    this.tail = this.head
    this.size = 0;
  }

  append(value) {
    const new_node = new Node(value, null)
    this.tail.next = new_node
    this.tail = new_node;
    this.size++;
  }

  prepend(value) {
    const new_node = new Node(value, null)
    const temp = this.head.next;
    this.head.next = new_node;
    new_node.next = temp;
    this.size++;
  }

  remove(key, callback) {
    let cur = this.head.next;
    let pre = this.head

    let compare
    if (callback) {
      compare = callback;
    } else {
      compare = (key1, key2) => key1 === key2
    }

    while (cur !== null) {
      if (compare(cur.value, key)) {
        const temp = cur.next;
        cur.next = null;
        pre.next = temp;
        if (this.size === 1) {
          this.tail = this.head;
        }
        this.size--;
        return true;
      }
      cur = cur.next;
      pre = pre.next;
    }
    return false;
  }

  search(key, callback) {
    let compare
    if (callback) {
      compare = callback;
    } else {
      compare = (key1, key2) => key1 === key2
    }

    let cur = this.head.next;
    while (cur !== null) {
      if (compare(cur.value, key)) {
        return cur.value;
      }
      cur = cur.next;
    }
  }

  printList() {
    let cur = this.head.next;
    const result = []
    while (cur !== null) {
      result.push(cur.value)
      cur = cur.next
    }

    console.log(result)
  }
}


// const hashtable = new Hashtable(10)
// hashtable.put("abc", 10)
// hashtable.put("mymoney", 15)
// hashtable.put("noel", 25)
// hashtable.put("testasdfavde", 30)
// hashtable.put("tesavde", 40)
// hashtable.put("tesfavde", 50)
// hashtable.put("tesde", 60)
// hashtable.put("tesvde", 70)
// hashtable.put("erde", 80)
// hashtable.put("pilseong", 100)
// hashtable.put("sangmi", 110)
// hashtable.put("suel", 120)
// hashtable.put("su", 121)
// hashtable.put("phil", 122)
// hashtable.put("delete", 23)


// console.log(hashtable.get("abc"))
// console.log(hashtable.get("mymoney"))
// console.log(hashtable.get("noel"))
// console.log(hashtable.get("testasdfavde"))
// console.log(hashtable.get("erde"))
// console.log(hashtable.get("pilseong"))
// console.log(hashtable.get("sangmi"))
// console.log(hashtable.get("suel"))
// console.log(hashtable.get("su"))
// console.log(hashtable.get("phil"))
// console.log(hashtable.get("delete"))
// // console.log(JSON.stringify(hashtable))

// hashtable.remove("delete")
// console.log(hashtable.get("delete"))
// console.log(JSON.stringify(hashtable))

// const list = new LinkedList(null);
// list.append(12)
// list.append(13)
// list.append(14)
// list.prepend(11)
// list.printList()
// console.log(list)

exports.Node = Node;