(function() {

  'use strict';

  const gulp = require('gulp');
  const config = require('./config');
  const $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  gulp.task('scripts', function () {
    return gulp.src('src/*.js')
      .pipe(gulp.dest('dist'))
      .pipe($.size({title: '[ default size ]:'}))
      .pipe($.uglify())
      .pipe($.rename({
        extname: '.min.js'
      }))
      .pipe(gulp.dest('dist'))
      .pipe($.size({title: '[ minimize size ]:'}));
  });

}());
