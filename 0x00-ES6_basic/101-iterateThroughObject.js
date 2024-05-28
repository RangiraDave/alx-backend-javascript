export default function iterateThroughObject(reportWithIterator) {
  for (const name in reportWithIterator) {
    return `${name} | `;
  }
}
