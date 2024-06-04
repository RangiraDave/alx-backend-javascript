// A function to return a boolean value if all the elements in a set are present in the array of values.
export default function hasValuesFromArray(set, array) {
  //return array.every((value) => set.has(value));
  for (let value of array) if (!set.has(value)) return false;
  return true;
}
