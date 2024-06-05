/**
 * Task 2: TypeScript
 * in this task, we will implement the following:
 * - Define an interface named DirectorInterface that accepts the following elements:
 *     - workFromHome(): string
 *    - getCoffeeBreak(): string
 *   - workDirectorTasks(): string
 * - Define an interface named TeacherInterface that accepts the following elements:
 *    - workFromHome(): string
 *   - getCoffeeBreak(): string
 * - workTeacherTasks(): string
 * - Implement the Director class that implements the DirectorInterface
 * - Implement the Teacher class that implements the TeacherInterface
 * - Create an employee based on the salary provided
 * - Check if an employee is a director
 */

// Define the interface for a director
export interface DirectorInterface {
    workFromHome(): string; // Method for working from home
    getCoffeeBreak(): string; // Method for taking a coffee break
    workDirectorTasks(): string; // Method for performing director tasks
}

// Define the interface for a teacher
export interface TeacherInterface {
    workFromHome(): string; // Method for working from home
    getCoffeeBreak(): string; // Method for taking a coffee break
    workTeacherTasks(): string; // Method for performing teacher tasks
}

// Implement the Director class that implements the DirectorInterface
export class Director implements DirectorInterface {
    workFromHome() {
        return 'Working from home';
    }

    getCoffeeBreak() {
        return 'Getting a coffee break';
    }

    workDirectorTasks() {
        return 'Getting to director tasks';
    }
}

// Implement the Teacher class that implements the TeacherInterface
export class Teacher implements TeacherInterface {
    workFromHome() {
        return 'Cannot work from home';
    }

    getCoffeeBreak() {
        return 'Cannot have a break';
    }

    workTeacherTasks() {
        return 'Getting to work';
    }
}

// Create an employee based on the salary provided
export function CreateEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 5000) {
        return new Teacher();
    }
    return new Director();
}

// Check if an employee is a director
export function isDirector(employee: Director | Teacher): boolean {
    return employee instanceof Director;
}

// Execute the work tasks of an employee
export function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) {
        return (employee as Director).workDirectorTasks();
    }
    return (employee as Teacher).workTeacherTasks();
}

// Define the possible subjects for teaching
export type Subjects = 'Math' | 'History';

// Teach a class based on the subject
export function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    }

    if (todayClass === 'History') {
        return 'Teaching History';
    }
}
