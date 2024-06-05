export default function cleanSet(set, startString) {
  if (!set || !startString) return '';
  if (typeof startString !== 'string') return '';
  if (startString.length === 0) return '';

  return [...set]
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');
}
