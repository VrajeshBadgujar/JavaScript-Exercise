/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

const content = `
<h1>hi, this is functions practice</h1>
<p>what this functions do is less important</p>
<ul>
  <li>function declaration</li>
  <li>funcion expression</li>
  <li>arrow funcion</li>
</ul>
`;

const newmenu = function () {
  const newMain = document.createElement("injection");
  newMain.classList.add("dabba");
  newMain.setAttribute("id", "box");
  newMain.innerHTML = content;

  change = document.querySelector("#box");
  change.style.backgroundColor = "#D93600";

  return newMain;
};

const menu = document.querySelector(".mainBody");
menu.append(newmenu());

// function sum (a, b){

//     let c = a +b;
//     return c
// }* y){

//     let c = a+ b;
//       return c;
// }
