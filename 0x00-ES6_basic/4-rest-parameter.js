export default function returnHowManyArguments(...args) {
  let i = 0;

  for (const temp of args)
    i++;

  return i;
}
