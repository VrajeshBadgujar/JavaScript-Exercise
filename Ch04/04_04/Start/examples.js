// const sayHello = () => console.log("Hello");
// console.log(sayHello.name);

// const add=(x,y,z)=>x+y+z;
// console.log(add.length);
// console.log(add.toString());
// console.log(add.call(null, 1,2,3));
// console.log(add(1,2,3));
// console.log(add.apply (null,[1,2,3]));
// const args = [1,2,3];
// console.log(add(...args));

const add=(x,y,z)=>x+y+z;
const args = [1,2,3];
const add1 = add.bind(null, 1);
console.log(add1(2 ,3));