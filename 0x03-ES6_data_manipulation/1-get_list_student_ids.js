export default function getListStudentId(listStudent) {
  if (!Array.isArray(listStudent)) {
    return [];
  }
  return listStudent.map((obj) => obj.id);
}
