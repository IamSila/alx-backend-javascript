/** 
 * function getListStudentIds
 * 
 */

export default function getListStudentIds(students) {
    if (students instanceof Array) {
        return students.map((student) => student.id);
    }
    /** if not an instance of an array */
    return [];
}
