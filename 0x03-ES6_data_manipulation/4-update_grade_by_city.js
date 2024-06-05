export default function updateStudentGradeByCity(students, city, newGrades) {
  // used filter to get the students in the city
  return students.filter((student) => student.location === city)
    .map((student) => {
      const grade = newGrades.filter((newGrade) => newGrade.studentId === student.id);
      const newGrade = grade.length > 0 ? grade[0].grade : 'N/A';
      // used spread operator to copy the student object and add the new grade
      return { ...student, grade: newGrade };
    });
}
