class ListNode {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.root = null;
  }

  // O(1) run time
  prepend(val) {
    let newNode = new ListNode(val);
    newNode.next = this.root;
    this.root = newNode;
  }

  append(val) {
    let newNode = new ListNode(val);
    newNode.next = null;
    let current = this.root;

    while(current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  find(val) {
    let index = 0;
    let current = this.root;

    while(current !== null) {
      if (index === val) {
        return current.data;
      }
      index++;
      current = current.next;
    }
  }


}