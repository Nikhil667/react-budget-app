const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "INR",
    style: "currency",
    minimumFractionDigits: 0
  });
  
  export function formatCurrency(number) {
    return CURRENCY_FORMATTER.format(number);
  }