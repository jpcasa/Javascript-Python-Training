'use strict';

const gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
      sass = require('gulp-sass'),
      maps = require('gulp-sourcemaps'),
      del = require('del');

gulp.task('concatScripts', () => {
  return gulp.src([
    'js/jquery.js',
    'js/sticky/jquery.sticky.js',
    'js/main.js'
  ])
    .pipe(maps.init())
    .pipe(concat('app.js'))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('js'));
});

gulp.task('minifyScripts', ['concatScripts'], () => {
  return gulp.src('js/app.js')
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('js'));
});

gulp.task('compileSass', () => {
  return gulp.src('scss/application.scss')
    .pipe(maps.init())
    .pipe(sass())
    .pipe(maps.write('./'))
    .pipe(gulp.dest('css'));
});

gulp.task('watchFiles', () => {
  gulp.watch(['scss/**/*.scss'], ['compileSass'])
  gulp.watch('js/main.js', ['concatScripts']);
});

gulp.task('clean', () => {
  del(['dist', 'css/application.css*', 'js/app*.js*']);
});

gulp.task('build', ['minifyScripts', 'compileSass'], () => {
  return gulp.src(['css/application.css', 'js/app.min.js', 'index.html',
                   'img/**', 'fonts/**'], { base: './' })
    .pipe(gulp.dest('dist'));
});

gulp.task('serve', ['watchFiles']);

gulp.task('default', ['clean'], () => {
  gulp.start('build');
});
