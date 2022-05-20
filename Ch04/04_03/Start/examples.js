const countup = (x,y) => {
   
    if (x>y) return;        
    countup(x+1,y);   
    console.log(x);
}
countup(0,10)