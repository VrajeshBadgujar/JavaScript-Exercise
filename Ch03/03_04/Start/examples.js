const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const isEven  = x => x %2 === 0;
const evenNumbers = numbers.filter( x => x %2 === 0);
const words = [
    "hello",
    "goodbuy",
    "the",
    "Antarctica"
]

const createLengthTest = minLength => raju => raju.length>minLength

const longWords = words.filter(createLengthTest(5));

console.log(longWords);
