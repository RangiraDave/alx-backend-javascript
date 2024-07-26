// This function performs various calculations based on the given type
const calculateNumber = (type, a, b) => {
  // If the type is 'SUM', perform addition and return the result
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  }
  // If the type is 'SUBTRACT', perform subtraction and return the result
  if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  }
  // If the type is 'DIVIDE', perform division and return the result
  if (type === 'DIVIDE') {
    // Check if the divisor is zero to avoid division by zero error
    return Math.round(b) === 0 ? 'Error' : Math.round(a) / Math.round(b);
  }
  // If the type is not recognized, return 0
  return 0;
};

// Export the calculateNumber function to make it accessible to other modules
module.exports = calculateNumber;
