class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    console.log('first:', this.first);
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    console.log('newNode :', newNode);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++
    console.log('this :', this);
    return this;
  }
  dequeue() {
  }
  //isEmpty;
}

const myQueue = new Queue();

myQueue.enqueue('Pete')
myQueue.enqueue('Parker')
myQueue.enqueue('Quinn')

