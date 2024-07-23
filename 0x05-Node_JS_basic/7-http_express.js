const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;
const databaseFile = process.argv[2];

app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
    fs.readFile(databaseFile, 'utf8', (err, data) => {
        if (err) {
            res.send('This is the list of our students\n' + err.message);
        } else {
            const lines = data.split('\n').filter(line => line !== '');
            const csStudents = lines.filter(line => line.endsWith('CS')).map(line => line.split(',')[0]);
            const sweStudents = lines.filter(line => line.endsWith('SWE')).map(line => line.split(',')[0]);

            res.send(`This is the list of our students\nNumber of students: ${lines.length}\nNumber of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}\nNumber of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
        }
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

module.exports = app;
