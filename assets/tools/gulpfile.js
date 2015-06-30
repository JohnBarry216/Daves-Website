var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  gulp.src('../css/sass/**/*.scss')
    .pipe(sass({outputStyle: 'compact'}))
    .pipe(gulp.dest('../css'));
});
 


gulp.task('default', function () {
  gulp.watch('../css/sass/**/*.scss', ['sass']);
});