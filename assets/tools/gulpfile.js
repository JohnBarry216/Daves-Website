var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

gulp.task('sass', function () {
  	return sass('../css/sass', {
		compass: true,
		style: 'expanded'
	})
	    .pipe(gulp.dest('../css'));
});
 


gulp.task('default', function () {
	gulp.start('sass');
 	gulp.watch('../css/sass/**/*.scss', ['sass']);
});
