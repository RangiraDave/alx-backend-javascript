export default function concatArrays(array1, array2, string) {
  result = [...array1, ...array2, ...string];
  return result;
}
