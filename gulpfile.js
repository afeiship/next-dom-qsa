(function () {

  var gulp = require('gulp');
  var del = require('del');
  var uglify = require('gulp-uglify');
  var conf = {
    src: 'src',
    dist: 'dist'
  };

  gulp.task('clean', function () {
    del(conf.dist);
  });

  gulp.task('uglify', function () {
    gulp.src(conf.src + '/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('dist'));
  });

  gulp.task('default', ['clean', 'uglify']);

}());
