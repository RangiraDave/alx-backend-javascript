/**
 * Subject class
 * @class Subject
 * @property {Subjects.Teacher} teacher
 * @method setTeacher
 */

namespace Subjects {
    export class Subject {
        teacher: Subjects.Teacher;

        set setTeacher(teacher: Subjects.Teacher) {
            this.teacher = teacher;
        }
    }
}
