var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnext = require('cssnext');
var precss = require('precss');
var vars = require('postcss-simple-vars');
gulp.task('css', function(){
  var processors = [
    autoprefixer({
      browsers: ['last 2 version']
    }),
    cssnext,
    precss,
    ({
      silent: true
    })
  ];
  return gulp.src('./src/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest'));
});
gulp.task('default', function(){
  gulp.start('css');
});
