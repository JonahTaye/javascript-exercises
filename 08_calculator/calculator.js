const add = function(a, b) {
	return parseInt(a) + parseInt(b)
};

const subtract = function(a, b) {
	return parseInt(a) - parseInt(b)
};

const sum = function(array) {
	return array.reduce((total, number) => total + number, 0)
};

const multiply = function(array) {
  return array.reduce((product, number) => product * number, 1)
};

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(number) {
  let total = 1
  
	for (let i = 1; i <= number; i++) {
    total *= i
  }

  return total
};
console.log(factorial(2))
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
