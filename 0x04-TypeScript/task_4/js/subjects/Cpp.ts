/**
 * Class Cpp
 * @class Cpp
 */

namespace Subjects {
    export interface Teacher {
        experienceTeachingC?: number;
    }

    export class Cpp extends Subjects.Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for CPP';
        }

        getAvailableTeacher(): string {
            if (!this.teacher || this.teacher.experienceTeachingC <= 0) {
                return 'No available teacher';
            }
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}
