export default function getStudentIdsSum(listStudent) {
  const initialValue = 0;
  return listStudent.reduce((accumulator, currentValue) => accumulator + currentValue.id, initialValue);
}
