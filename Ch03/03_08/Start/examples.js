// const numbers = [5, 7, 2, 40, 23, 14, 8, 4, 11];
const numbers = ["manish", "suresh", "smit", "vrajesh"];

const sum = numbers.reduce((acc, x) => {
    console.log(`acc is ${acc}`);
    console.log(`x  is ${x}`);

    return acc + x;
}, 0 )

const product = numbers.reduce((acc, x) => {
    console.log(`acc is ${acc}`);
    console.log(`x  is ${x}`);

    return acc + x;
})

console.log(product);