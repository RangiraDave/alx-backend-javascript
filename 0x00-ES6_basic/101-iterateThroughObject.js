export default function iterateThroughObject(reportWithIterator) {
  let employeeNames = [];
  for (const name of reportWithIterator) {
    employeeNames.push(name);
  }

  return employeeNames.join(' | ');
}
