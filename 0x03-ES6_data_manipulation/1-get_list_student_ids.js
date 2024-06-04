export default function getListStudentIds(array) {
  if (!array(array)) return [];

  return array.map(obj => obj.id);
}
