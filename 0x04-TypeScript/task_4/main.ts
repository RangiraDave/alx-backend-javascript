/**
 * @description This is the main file for the task 4
 * @file main.ts
 * @overview Define an interface named Subjects that accepts the following elements:
 *    - getRequirements(): string
 *   - getAvailableTeacher(): string
 * - Define an interface named Teacher that accepts the following elements:
 *   - firstName(string)
 *  - lastName(string)
 * - experienceTeachingC(number)
 * - Define an interface named JavaScript that extends the Subjects interface:
 *  - duration(number)
 * - Define an interface named React that extends the Subjects interface:
 * 
 */

export const cpp: Subjects.Cpp = new Subjects.Cpp();
export const Java: Subjects.Java = new Subjects.Java();
export const react: Subjects.React = new Subjects.React();
export const cTeacher: Subjects.Teacher = {
    firstName: 'Micah',
    lastName: 'Ondiwa',
    experienceTeachingC: 10,
};

console.log('C++');
cpp.setTeacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
cpp.setTeacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('React');
cpp.setTeacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
