/**
 * @param {number} days
 * 40 reais dia
 * 50 off 1 semana
 * 20 off 3 dias
 * @return {number}
 */
function calculateRentalCost(days) {
  const cost = 40;
  let result = days * cost;
  const week = 7;
  const threeDays = 3;
  const weekDiscount = 50;
  const daysDiscount = 20;

  if (days >= week) {
    result = result - weekDiscount;
  } else if (days >= threeDays) {
    result = result - daysDiscount;
  }

  return result;
}

module.exports = calculateRentalCost;
