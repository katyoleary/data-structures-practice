'use strict';

///copy push pop methods
 
module.exports = exports = {};

exports.list = () => {};

exports.copy = arr => {
  return arr.map( a => a, []);
}

exports.push = (arr, list) => {
  return [...list, ...arr];
}

exports.pop = arr => {
  arr.pop();
  return arr;
}