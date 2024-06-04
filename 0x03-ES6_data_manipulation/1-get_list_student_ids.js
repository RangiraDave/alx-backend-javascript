export default function getListStudentIds(array) {
  if (!isArray(array)) return [];

  return array.map(obj => obj.id);
}
