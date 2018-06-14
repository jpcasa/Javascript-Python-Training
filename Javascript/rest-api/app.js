'use strict';

// Include Modules
const express = require('express');
const app = express();
const routes = require('./routes.js');
const mongoose = require('mongoose');

const jsonParser = require('body-parser').json;
const logger = require('morgan');

// Make JSON Accesible
app.use(jsonParser());

// Use Morgan
app.use(logger('dev'));

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/qa');
const db = mongoose.connection;

db.on('error', (err) => {
  console.log("Connection error:", err);
});

db.once('open', () => {
  console.log('db connection succesful');
});

// Qustion Routes
app.use('/questions', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  });
});

// Declares PORT
const port = process.env.PORT || 3000;

// Listen on Port 3000
app.listen(port, () => {
  console.log('Express server is listening on port:', port);
});
