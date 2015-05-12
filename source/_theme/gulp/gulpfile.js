var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('jekyll', function (gulpCallBack){
    process.chdir('../../../');
    var spawn = require('child_process').spawn;
    var jekyll = spawn('jekyll', ['build', '--config', '_config.yml'], {stdio: 'inherit'});

    jekyll.on('exit', function(code) {
        gulpCallBack(code === 0 ? null : 'ERROR: Jekyll process exited with code: '+code);
    });
});

gulp.task('default', ['jekyll'],function() {
  return gulp.src('../stylesheets/main.scss')
    // .pipe(watch('sass/*.scss'))
    .pipe(sass())
    .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
    .pipe(gulp.dest('../../../_build/css'));
});


