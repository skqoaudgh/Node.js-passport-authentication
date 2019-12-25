const express = require('express');

const indexRouter = require('./routes/index');
const UserRouter = require('./routes/users');

const app = express();

app.use('/', indexRouter);
app.use('/users', UserRouter);

app.listen(3000, console.log('Running on port 3000.'));