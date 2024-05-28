import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    getBudgetObject.budget.income,
    getBudgetObject.budget.gdp,
    getBudgetObject.budget.capita,
  };

  return fullBudget;
}
