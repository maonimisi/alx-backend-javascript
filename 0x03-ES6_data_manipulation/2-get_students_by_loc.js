export default function getStudentsByLocation(listStudent, city) {
  return listStudent.filter((listStudent) => listStudent.location === city);
}
