'use strict';

//insert, find, findMax, findMin, calcHeight, findNearest

module.exports = exports = {};

exports.Node = class {
  constructor(val, left=null, right=null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

exports.BST = class {
  constructor(root=null) {
    this.root = root;
  }

  insert(val) {
    let node = new Node(val);

    if (this.root === null) {
      this.root = node;
    } else {
      this._insert(this.root, node.val);
    }
  }

  _insert(root, node) {
    if(node.val > root.val) {
      if(!root.right) {
        root.right = node;
      } else {
        this._insert(root.right, node);
      } 
    } else {
        if(!root.left) {
          root.left = node;
        } else {
          this._insert(root.left, node);
        }
      }
    }

    
    findNearest(bst, nearest) {
      let difference = Math.abs(bst.val - nearest);
      let result = bst.val;
      _traverse(bst);

      function _traverse(node) {
        if(Math.abs(node.val - nearest) < difference) {
          difference = Math.abs(node.val - nearest);
          result = node.val;
        }

        if(node.left) _traverse(node.left);
        if(node.right) _traverse(node.right);
      }
      
      return result;
    }

    findNode(bst, find) {
      let result = false;
      _traverse(bst);

      function _traverse(bst) {
        if (bst.val === find) {
          return result = true;
        }
        if (result === false) {
          if(bst.left) _traverse(bst.left);
          if(bst.right) _traverse(bst.right);
        }
      }

      return result;
    }

    findMax(bst) {
      if(!bst) {
        return 'data required';
      }
      if(bst.right) {
        return this.findMax(bst.right);
      }
      return bst.val;
    }

    findMin(bst) {
      if(!bst) {
        return 'data required';
      }
      if(bst.left) {
        return this.findMin(bst.left);
      }
      return bst.value;
    }


    //TODO finish shit
    calcHeight(bst) { 
      if(!node) return 0;
      var leftHeight = height(bst.left);
      var rightHeight = height(bst.right);

      return Math.max(leftHeight, rightHeight) + 1;

    }

}
