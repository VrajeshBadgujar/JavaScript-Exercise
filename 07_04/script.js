/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

const desk = [
  "laptop",
  "mouse",
  "notepad",
  "bottle",
  "mobile",
  "hankey",
  "headphone",
  "charger",
];
console.log(desk);

// desk.pop();
// console.log(desk);

// desk.shift();
// console.log(desk);

// desk.unshift(desk.pop());
// console.log(desk);

// desk.sort();
// console.log(desk);

// let stuff = desk.find(function (item) {
//   if (item.length >= 7) {
//     return item;
//   }
// });
// console.log(stuff);

let remove = "notepad";
desk.splice(desk.indexOf(remove), 1);
console.log(desk);
