/** 
 * function to return array of objects located in a certain city
 * arguments - list of students, city
 */

export default function getStudentByLocation(students, city) {
  if (students instanceof Array) {
    return students.filter((student) => student.location === city);
  }
  return [];
}
