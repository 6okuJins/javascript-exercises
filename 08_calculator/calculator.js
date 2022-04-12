const add = function(x,y) {
  return (x + y);
};

const subtract = function(x,y) {
	return (x - y);
};

const sum = function(array) {
	return array.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
};

const multiply = function(array) {
  return array.reduce((previousValue, currentValue) => previousValue * currentValue, 1);
};

const power = function(x, y) {
	return x**y;
};

const factorial = function(n) {
  let result = 1;
	for (n; n>0; n--) {result = result * n};
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
