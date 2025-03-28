const express = require('express');
const router = express.Router();
const Task = require('../models/task');

let tasks = [];
let taskIdCounter = 1;

// POST /api/tasks
router.post('/', (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required' });
  }

  const newTask = new Task(taskIdCounter++, title, description);
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT /api/tasks/:id
router.put('/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required' });
  }

  const taskIndex = tasks.findIndex(task => task.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  tasks[taskIndex] = { id: taskId, title, description };
  res.status(200).json(tasks[taskIndex]);
});

module.exports = router;
