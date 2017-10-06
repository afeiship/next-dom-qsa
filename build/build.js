(function() {

  'use strict';

  const gulp = require('gulp');
  const config = require('./config');

  gulp.task('build', ['clean'], function() {
    // console.log('Your task goes here!');
    gulp.start(['scripts']);
  });



}());
