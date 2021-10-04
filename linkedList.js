let myLinkedList = {
  head: {
    value: 10,
    next: {
      value: 5,
      next: {
        value: 16,
        next: null
      }
    }
  }
}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null
    }
    this.tail = this.head;
    this.length = 1
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log('array :', array.join(' --> '));
    return array.join(' --> ')
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode
  }

  insert(index, value) {
    if (index >= this.length) {
      this.append(value);
      return this.printList();
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holder = leader.next;
    leader.next = newNode;
    newNode.next = holder;
    this.length++;
    return this.printList();
  }

  remove(index) {
    if (index >= this.length) {
      const leader = this.traverseToIndex(this.length - 1);
      leader.next = null;
      this.tail = leader;
      this.length--;
      return this.printList();
    }
    const leader = this.traverseToIndex(index - 1);
    const toRemoveNode = leader.next;
    leader.next = toRemoveNode.next;
    this.length--;
    return this.printList();
  }
}

const linkedList = new LinkedList(10)
linkedList.append(20)
linkedList.append(30)
linkedList.prepend(0)
linkedList.printList()
linkedList.insert(2, 15)
linkedList.insert(22, 115)
linkedList.remove(22)
console.log('linkedList :', linkedList);

class DoubleLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      prev: null
    }
    this.tail = this.head;
    this.length = 1
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this
  }
}
