export function getPercentage(amount, percentage) {
  return (amount / 100) * percentage;
}

export function getPercentageUsed(income, expenses) {
  let inc = parseInt(income, 10);
  let exp = parseInt(expenses, 10);
  if (inc < 0) {
    return 0;
  }
  return (exp / inc) * 10;
}
