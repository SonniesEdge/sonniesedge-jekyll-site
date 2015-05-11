var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function() {
  return gulp.src('../design/stylesheets/source/main.scss')
    // .pipe(watch('sass/*.scss'))
    .pipe(sass())
    .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
    .pipe(gulp.dest('../design/stylesheets/build'));
});