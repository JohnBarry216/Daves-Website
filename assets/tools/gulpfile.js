var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var annotate = require('gulp-ng-annotate');
var minify = require('gulp-uglify');


	// Compile Sass files
gulp.task('sass', function () {
  	return sass('../css/sass', {
				compass: true,
				style: 'expanded'
			})
	    	.pipe(gulp.dest('../css'));
});


	// concat lib files, they will already be mini
	//  MIGHT NOT NEED THIS, WILL TEST MORE LATER
gulp.task('libs', function() {
	var files = [
		'../libs/angular.min.js',
		'../libs/angular-ui-router.min.js',
		'../libs/jquery.min.js',
		'../libs/jquery-ui.min.js',
		'../libs/bootstrap.min.js'
	];
	return gulp.src(files)
			.pipe(concat('libraries.js', {newLine: ';\n\r\n\r'}))
			.pipe(gulp.dest('../libs'));
});


	// concat all angular files and mini
gulp.task('angular-mini', function() {
	return gulp.src(['../../app/**/*.js', '!../../app/app.min.js'])
			.pipe(concat('app.min.js', {newLine: '\n\r'}))
			.pipe(annotate())
			.pipe(minify())
			.pipe(gulp.dest('../../app'));
});
 


gulp.task('default', function () {
	gulp.start('sass');
	gulp.start('libs');
	gulp.start('angular-mini');

	// watch sass
 	gulp.watch('../css/sass/**/*.scss', ['sass']);

 	// watch libs
 	gulp.watch('../libs/*.js', ['libs']);

 	// watch angular js files
 	gulp.watch('../../app/**/*.js', ['angular-mini']);


});
