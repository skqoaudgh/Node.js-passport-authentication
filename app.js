const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const indexRouter = require('./routes/index');
const UserRouter = require('./routes/users');

const app = express();

app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/users', UserRouter);

app.listen(3000, console.log('Running on port 3000.'));