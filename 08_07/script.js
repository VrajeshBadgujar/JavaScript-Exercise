/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

// const tipCalculator = () => {
//   let sum = 29.95;
//   let percentage = 18;
//   let tip = sum * (percentage / 100);
//   let total = sum + tip;
//   console.log(`
//   Sum before tip: ${sum}
//   Tip percentage: ${percentage}%
//   Tip:            ${tip.toFixed(2)}
//   Total:          ${total.toFixed(2)}
// `);
// };

// tipCalculator();

const tipCalculator = (sum, percentage, currency, prefix) => {
  let tip = sum * (percentage / 100);
  let total = sum + tip;
  if (prefix) {
    console.log(`

      sum before tip: ${currency}${sum}
      tip percentage: ${percentage}%
      tip:             ${currency}${tip.toFixed(2)}
      total:          ${currency}${total.toFixed(2)}
      `);
  } else {
    console.log(`
  sum before tip:${sum} ${currency}
  tip percentage: ${percentage}%
  tip:             ${tip.toFixed(2)}${currency}
  total:          ${total.toFixed(2)}${currency}  
  `);
  }
};

tipCalculator(29.95, 28, "$", false);
