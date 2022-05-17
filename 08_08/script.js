/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 *
 * List of ISO language codes:
 * @link http://www.lingoes.net/en/translator/langcode.htm
 */
const formattedValue = (locale, currency, value) => {
  let formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
  return formatter;
};

const tipCalculator = (sum, percentage, locale, currency) => {
  let tip = sum * (percentage / 100);
  let total = sum + tip;
  console.log(`
      Sum before tip: ${formattedValue(locale, currency, sum)}
      Tip percentage: ${formattedValue(percentage)}%
      Tip:            ${formattedValue(locale, currency, tip)}
      Total:          ${formattedValue(locale, currency, total)}
    `);
};

tipCalculator(29.95, 18, "en-US", "USD");
