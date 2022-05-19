const double = x => x * 2;
const subtractOne = x => x - 1;
const triple = x => x * 3;
const add5 = x => x + 5;

const functionsArray = [
    double,
    subtractOne,
    triple,
    add5,
    Math.sqrt,
];

var number = 42;

functionsArray.forEach(item => number = item(number));

console.log(number);