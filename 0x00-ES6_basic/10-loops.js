export default function appendToEachArrayValue(array, appendString) {
  let index = 0;
  for (let value of array) {
    // const index = array.indexOf(value);
    array[index] = appendString + value;
    index++;
  }

  return array;
}
