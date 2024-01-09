function updateStudentGradeByCity(studentList, city, newGrades) {
  if (!Array.isArray(studentList)) {
    return [];
  }
  return studentList.filter((std) => std.location === city).map((std) => {
    std.grade = 'N/A';
    for (const grd of newGrades) {
      if (grd.studentId === std.id) {
        std.grade = grd.grade;
      }
    }
    return std;
  });
}
