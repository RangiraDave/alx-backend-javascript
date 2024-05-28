export default function createIteratorObject(report) {
  let employees = [];
  for (const department of Object.values(report.allEmployees)) {
    for (const employee of department) {
      employees.push(employee);
    }
  }

  return employees[Symbol.iterator]();
}
