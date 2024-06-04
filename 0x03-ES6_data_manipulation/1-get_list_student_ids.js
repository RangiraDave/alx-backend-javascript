export default function getListStudentIds(array) {
  let ids = []
  for (let index = 0; index < array.length; index++) {
    ids.push(array[index]['id']);
  }
  return ids;
}
