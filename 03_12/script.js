//  * Practice: Making classes and objects
//  *
//  * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
//  * - Create a class describing this object type - its properties and methods.
//  * - Create several objects using the class.
//  * - Test the objecs by calling their properties and using their methods in the console.

import Library from "./library.js";

const myLibrary = new Library(
  " lordOfTheRings",
  "fiction",
  "jrr_Tonkin",
  1955,
  "150_million",
  "100_thousands"
);

console.log("this is new one", myLibrary);
console.log(myLibrary.copiesSold.high);
console.log(myLibrary.type);

const yourLibrary = new Library(
  " Think&GrowRich",
  "Non-fiction",
  "NapolianHill",
  1932,
  "165_million",
  "500_thousands"
);

console.log("this is new one", yourLibrary);
