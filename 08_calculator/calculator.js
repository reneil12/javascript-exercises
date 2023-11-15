const add = function(a=0, b=0) {
	return a + b;
};

const subtract = function(a=0, b=0) {
	return a - b;
};

const sum = function(arr) {
	const sumNumbers = arr.reduce((initialSum, number) => {
    return initialSum += number;
  }, 0);
  return sumNumbers;
};

const multiply = function(arr) {
  const productNumbers = arr.reduce((initialProduct, number) => {
    return initialProduct *= number;
  }, 1);
  return productNumbers;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(num) {
  let factorial = 0;
  let arr = [];
  if (num === 0){
    return 1;
  }
  for (let i=1; i <= num; i++){
      arr.push(i)
  }
  let factorialNumber = arr.reduce((initialValue, number) => {
    return initialValue *= number;
  },);
  return factorialNumber;
};

add(0, 0);
add(2, 2);
add(2, 6);
subtract(10, 4);
sum([]);
sum([7]);
sum([7, 11]);
sum([1, 3, 5, 7, 9]);
multiply([2, 4]);
multiply([2, 4, 6, 8, 10, 12, 14]);
power(4, 3);
factorial(0);
factorial(1);
factorial(2);
factorial(5);
factorial(10);
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
