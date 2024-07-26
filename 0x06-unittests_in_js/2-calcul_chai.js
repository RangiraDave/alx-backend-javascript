// Function to perform various calculations based on the given type
const calculateNumber = (type, a, b) => {
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b); // Return the sum of a and b
  }
  if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b); // Return the subtraction of b from a
  }
  if (type === 'DIVIDE') {
    return Math.round(b) === 0 ? 'Error' : Math.round(a) / Math.round(b); // Return the division of a by b, unless b is 0
  }
  return 0; // Return 0 if the type is not recognized
};

module.exports = calculateNumber;
