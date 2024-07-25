const { readDatabase } = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    try {
      const database = readDatabase();
        let students = database.students;
          let fields = {};

        students.forEach((student) => {
          const field = student.field.toLowerCase();
          if (fields[field]) {
            fields[field].count++;
              fields[field].names.push(student.firstName);
          } else {
            fields[field] = {
              count: 1,
              names: [student.firstName],
              };
          }
        });

        let output = 'This is the list of our students\n';
        Object.keys(fields)
          .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
          .forEach((field) => {
            const { count, names } = fields[field];
            const formattedNames = names.join(', ');
            output += `Number of students in ${field.toUpperCase()}: ${count}. List: ${formattedNames}\n`;
          });

        response.status(200).send(output);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }

  static getAllStudentsByMajor(request, response) {
    try {
      const database = readDatabase();
      const major = request.query.major;

      if (major !== 'CS' && major !== 'SWE') {
        response.status(500).send('Major parameter must be CS or SWE');
        return;
      }

      let students = database.students.filter((student) => student.field === major);
      let output = `List: ${students.map((student) => student.firstName).join(', ')}`;

      response.status(200).send(output);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
