class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    console.log('this.top :', this.top);
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holder = this.top;
      this.top = newNode;
      this.top.next = holder;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 1) {
      this.bottom = null;
    }
    if (!this.top) {
      return null;
    }
    this.top = this.top.next;
    this.length--;
    return this;
  }
}

const myStack = new Stack();
myStack.push('hanoi');
myStack.push('hue');
myStack.push('danang');
myStack.pop();
myStack.peek();
