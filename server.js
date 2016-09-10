var express = require('express');
var app = express();
var gulpTasks = require('./gulpfile.js');
const gulp = require('gulp');

app.use(express.static('dist'));

app.listen(8080, function () {
  console.log('Server app listening on port 8080!');
});

gulp.start(['default','watch']);
