var gulp = require('gulp');
var clean = require('gulp-clean');
var postcss = require('gulp-postcss');

var autoprefixer = require('autoprefixer');
var color_rgba_fallback = require('postcss-color-rgba-fallback');
var opacity = require('postcss-opacity');
var pseudoelements = require('postcss-pseudoelements');
var vmin = require('postcss-vmin');
var pixrem = require('pixrem');
var will_change = require('postcss-will-change');
gulp.task('css', function(){
  var processors = [
    will_change,
    autoprefixer,
    color_rgba_fallback,
    opacity,
    pseudoelements,
    vmin,
    pixrem
  ];
  return gulp.src('./src/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest'));
});

gulp.task('clean', function(){
  return gulp.src('./dest/*.css', {read: false})
    .pipe(clean())
});

gulp.task('default', ['clean', 'css']);
