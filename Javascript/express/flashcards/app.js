const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const port = 3000;

// Main Express Application
const app = express();

// Body Parser for Post Requests - Returns data
app.use(bodyParser.urlencoded({ extended: false }));

// Cookies
app.use(cookieParser());

app.use('/static', express.static('public'));

// Use PUG as html view engine
app.set('view engine', 'pug');

// Routes
const mainRoutes = require('./routes');
const cardRoutes = require('./routes/cards');

app.use(mainRoutes);
app.use('/cards', cardRoutes);

// 404
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error Handler
app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
});

// Listen on Port 3000
app.listen(port, () => {
  console.log(`The application is running on localhost:${port}`);
});
