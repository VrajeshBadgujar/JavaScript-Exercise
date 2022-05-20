const add =(x,y,z)=>x+y+z;

const addPartial = (a) =>(b)=>
(c)=> add(a,b,c);

const sum = addPartial(5)(6)(7); 

console.log(sum);