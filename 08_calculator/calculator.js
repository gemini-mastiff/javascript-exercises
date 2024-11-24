const add = (a, b) => a+b;

const subtract = (a, b) => a-b;

const sum = arr => arr.reduce((total,value) => total + value, 0);

const multiply = arr => arr.reduce((total, value) => total * value, 1);

const power = function(a, b) {
	// let sum = a;
  // for (let i = 1; i < b; i++){
  //   sum *= a;
  // }
  // return sum;
  return Math.pow(a, b);
};

const factorial = function(num) {
	let sum = 1;
  for (let i = 1; i <= num; i++){
    sum *= i;
  }
  return sum;
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
