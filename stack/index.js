'use strict';

class Node {
  constructor(val) {
    if (!val) throw new Error('no val provided');
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(val) {
    if (this.size === this.maxSize) throw new Error('stack overflow!!!');
    let node = new Node(val);

    node.next = this.top;
    this.top = node;
    this.size++;
    return this.top;
  }

  pop() {
    let temp = this.top;
    this.top = temp.next;
    temp.next = null;
    this.size--;

    return temp;
  }
}