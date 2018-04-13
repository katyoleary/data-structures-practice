'use strict';

const LinkedList = require('../index.js').default.LinkedList;
const ListNode = require('../index.js').default.LinkNode;

import "jest";

describe('linked list module', () => {
  describe('#prepend', () => {
    it('should prepend a value to linked list', () => {
      let list = new LinkedList();
      list.prepend(88);
      list.prepend(64);
      console.log(list);
      expect(list).toEqual()
    })
  }) 
})