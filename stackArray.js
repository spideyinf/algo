class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next
  }
}

class Stack {
  constructor() {
    this.array = []
  }

  peek() {
    console.log('peek: ', this.array[this.array.length - 1]);
    return this.array[this.array.length - 1];
  }

  push(value) {
    this.array.push(value);
    return this;
  }

  pop() {
    this.array.pop();
    return this;
  }
}

const myStack = new Stack();
myStack.push('Vietnam');
myStack.push('France');
myStack.push('England');
myStack.pop();
myStack.peek();
