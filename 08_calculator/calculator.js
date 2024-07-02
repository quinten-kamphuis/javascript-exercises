const add = (...values) => values.reduce((acc, val) => acc + val);

const subtract = (...values) => values.reduce((acc, val) => acc - val);

const sum = values => values.length ? values.reduce(((acc, val) => acc + val)) : 0;

const multiply = values => values.length ? values.reduce(((acc, val) => acc * val)) : 0;

const power = (...values) => values.reduce((acc, val) => Math.pow(acc, val));

const factorial = value => value ? Array.from({ length: value }, (v, i) => value - i).reduce(((acc, val) => acc * val)) : 1;

console.log(factorial(0))


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
