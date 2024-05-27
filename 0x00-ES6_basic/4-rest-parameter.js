export default function returnHowManyArguments(...args) {
  // Returning the number using rest parameter syntax.
  let i = 0;
  for (const temp of args) {
    i++;
  }
  return i;
}
