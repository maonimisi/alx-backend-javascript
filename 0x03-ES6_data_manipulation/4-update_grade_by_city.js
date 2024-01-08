export default function updateStudentGradeByCity(listStudent, city, newGrades) {
  if (!Array.isArray(listStudent)) {
    return [];
  }
  return listStudent.filter((std) => std.location === city).map((std) => {
    std.grade = 'N/A';
    for (const grd of newGrades) {
      if (grd.studentId === std.id) {
        std.grade = grd.grade;
      }
    }
    return std;
  });
}
