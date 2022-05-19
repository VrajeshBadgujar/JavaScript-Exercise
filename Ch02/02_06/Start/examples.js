const createPrinter = () => {
   const myFavouriteNumber = 42;

   return () => console.log(`my Favourite Number is  ${myFavouriteNumber}`);
}

const printer = createPrinter();
printer();

console.log(myFavouriteNumber);