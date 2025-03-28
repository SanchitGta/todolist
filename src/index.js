const express = require('express');
const bodyParser = require('body-parser');
const tasksRoutes = require('./routes/tasks');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/api/tasks', tasksRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
