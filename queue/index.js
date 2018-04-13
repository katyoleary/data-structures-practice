'use strict';

class Node {
  constructor() {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.length = 0;
  }

  enqueue(val) {
    this[this.length] = val;
    if (!this.first) this.first = 0;
    this.length++;
  }

  dequeue() {
    temp = this.first;
    this.first = this.first.next;
    this.length--;
    return temp;
  }
}