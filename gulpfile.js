var gulp          = require('gulp');
var sass          = require('gulp-sass');
var autoprefixer  = require('gulp-autoprefixer');
var browserSync   = require('browser-sync');
var cp            = require('child_process');

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});


gulp.task('sass', ['jekyll-build'],function() {
  return gulp.src('source/_theme/stylesheets/main.scss')
    .pipe(sass({'sourceComments': 'map'}))
    .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
    .pipe(gulp.dest('_build/css'))
    .pipe(browserSync.reload({stream:true}));
});


gulp.task('sass-rebuild', ['sass'], function () {
    browserSync.reload();
});


gulp.task('browser-sync', ['jekyll-rebuild','sass'], function() {
    browserSync({
        server: {
            baseDir: '_build'
        }
    });
});

// Watch for changes
gulp.task('watch', ['browser-sync'], function () {
    gulp.watch(['source/*/*.html'], ['sass-rebuild']);
    gulp.watch(['source/*/*.md','source/_theme/stylesheets/*.scss'], ['sass']);
})


gulp.task('default', ['sass']);

