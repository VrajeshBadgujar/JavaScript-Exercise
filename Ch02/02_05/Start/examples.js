
const createMultiplier = y => x => x * y;

const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

 
console.log(double(3));