var gulp = require('gulp');
var browserify = require('browserify');
var babelify= require('babelify');
var util = require('gulp-util');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('build', function() {
  browserify('./index.js', { debug: true })
  .add(require.resolve('babel/polyfill'))
  .transform(babelify)
  .bundle()
  .on('error', util.log.bind(util, 'Browserify Error'))
  .pipe(source('pytask.js'))
  .pipe(buffer())
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(uglify({ mangle: true }))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('.'));
});

gulp.task('watch', ['build'], function() {
  gulp.watch(['src/**.js'], ['build']);
});

gulp.task('default', ['build']);
