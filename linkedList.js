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
    const newNode = {
      value,
      next: null
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this
  }

  prepend(value) {
    const newNode = {
      value,
      next: this.head
    }
    this.head = newNode;
    this.head.next = newNode;
    this.length++;
    return this
  }

}

const linkedList = new LinkedList(10)
linkedList.append(20)
linkedList.append(30)
linkedList.prepend(0)
console.log('linkedList :', linkedList);
