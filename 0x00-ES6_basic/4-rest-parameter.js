export default function returnHowManyArguments(...args) {
  // eslint-disable-next-line no-unused-vars, no-shadow
  let i = 0;
  for (const temp of args) {
    i++;
  }
  return i;
}
