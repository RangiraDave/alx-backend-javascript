const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
        const database = process.argv[2];
        fs.readFile(database, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                const students = data.split('\n').filter(line => line !== '');
                const csStudents = students.filter(line => line.split(',')[3] === 'CS');
                const sweStudents = students.filter(line => line.split(',')[3] === 'SWE');
                const response = `This is the list of our students\nNumber of students: ${students.length}\nNumber of students in CS: ${csStudents.length}. List: ${csStudents.map(line => line.split(',')[0]).join(', ')}\nNumber of students in SWE: ${sweStudents.length}. List: ${sweStudents.map(line => line.split(',')[0]).join(', ')}`;
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(response);
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

app.listen(1245);

module.exports = app;
