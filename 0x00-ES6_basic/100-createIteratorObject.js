export default function createIteratorObject(report) {
  let iterator = [];
  for (const empList in report) {
    for (const employee in empList) {
      iterator += employee;
    }
  }
  return iterator;
}
