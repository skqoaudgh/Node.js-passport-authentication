const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const db = require('./config/keys').MongoURI;

const indexRouter = require('./routes/index');
const UserRouter = require('./routes/users');

const app = express();

mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected..'))
    .catch(err => console.log(err));

app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', UserRouter);

app.listen(3000, console.log('Running on port 3000.'));