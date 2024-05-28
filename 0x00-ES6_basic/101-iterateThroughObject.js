export default function iterateThroughObject(reportWithIterator) {
  let employeeNames = [];
  for (const name of Object.values(reportWithIterator)) {
    employeNames.push(name);
  }

  return employeeNames.join(' | ');
}
