/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

const formatter = (locale, currency, value) => {
  let formatvalue = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
  return formatvalue;
};

const tipCalculator = (sum, percentage, locale, currency) => {
  let tip = sum * (percentage / 100);
  let total = sum + tip;
  console.log(`
      sum before tip: ${formatter(locale, currency, sum)}
      tip percentage: ${percentage}%
      tip:             ${formatter(locale, currency, tip)}
      total:          ${formatter(locale, currency, total)}
      `);
};

tipCalculator(29.95, 28, "en-US", "USD");
