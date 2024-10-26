/** create a fucntion getStudentsSum
 * 
 */

export default function getStudentsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (prevStudent, curStudent) => prevStudent.id || prevStudent.id + curStudent.id,
        0,
    );
  }
  return 0;
}
