(function() {

  'use strict';

  const gulp = require('gulp');
  const config = require('./config');

  gulp.task('build', ['clean'], function() {
    gulp.start(['scripts']);
  });



}());
