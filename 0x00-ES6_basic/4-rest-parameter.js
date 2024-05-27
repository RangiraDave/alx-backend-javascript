export default function returnHowManyArguments(...args) {
  // eslint-disable-next-line no-unused-vars, no-shadow Returning the number using rest parameter syntax.
  let i = 0;
  for (const temp of args) {
    i++;
  }
  return i;
}
