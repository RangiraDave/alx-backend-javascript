export default function iterateThroughObject(reportWithIterator) {
  let employeeNames = [];
  for (const name of reportWithIterator) {
    employeNames.push(name);
  }

  return employeeNames.join(' | ');
}
