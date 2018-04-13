'use strict';

export default exports = {};

export class ListNode {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

export class LinkedList {
  constructor() {
    this.root = null;
  }
  // O(1) run time
  //prepend a val to the front of the linked list
  prepend(val) {
    if (!val)
      return;
    let newNode = new ListNode(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    newNode.next = this.root;
    this.root = newNode;
    return this;
  }
  //O(n) run time. 
  //append val to the end of the linked list
  append(val) {
    if (!val)
      return;
    let newNode = new ListNode(val);
    if (!this.root) {
      this.root = newNode;
    }
    newNode.next = null;
    let current = this.root;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }
  //O(n) run time
  //find and return a value according to its index
  find(val) {
    let index = 0;
    let current = this.root;
    while (current !== null) {
      if (index === val) {
        return current.data;
      }
      index++;
      current = current.next;
    }
  }
}

let list = new LinkedList();
list.prepend(1);
list.prepend(2);
list.prepend(3);

console.log(list);

list.append(1);
list.append(2);
list.append(3);

console.log(list);
