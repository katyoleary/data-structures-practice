let calculateHeight = (tree) => {
  //! Vinicio - this starts the process
  return calculateHeightHelper(tree.root);
};


let calculateHeightHelper = (root) => {
  //-----------------------------------------------------------
  // BASE CASE
  //-----------------------------------------------------------
  if (root === null) {
    return -1;
  }
  if (root.left === null && root.right === null) {
    // Vinicio - if I am a leaf. My height is 0
    return 0;
  }
  //-----------------------------------------------------------
  // RECURSIVE CASE
  //-----------------------------------------------------------
  // Vinicio - Hey...I have no idea how to solve this.
  // Let me just calculate the height of my left and right children
  // Let them deal with that calculation, and I'm just going to
  // add one their results, because I know I'm one level higher.
  let leftChildHeight = calculateHeightHelper(root.left);
  let rightChildHeight = calculateHeightHelper(root.right);
  let highestValue = Math.max(leftChildHeight, rightChildHeight);
  return highestValue + 1;
};