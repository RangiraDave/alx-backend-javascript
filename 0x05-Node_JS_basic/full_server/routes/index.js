const express = require('express');
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

const router = express.Router();

// Route: /
router.get('/', AppController.index);

// Route: /students
router.get('/students', StudentsController.getAllStudents);

// Route: /students/:major
router.get('/students/:major', StudentsController.getStudentsByMajor);

module.exports = router;
