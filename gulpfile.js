var gulp          = require('gulp');
var sass          = require('gulp-sass');
var autoprefixer  = require('gulp-autoprefixer');
var browserSync   = require('browser-sync');
var cp            = require('child_process');
var imageResize   = require('gulp-image-resize');

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

gulp.task('images-bg', ['images-pages'], function () {
  gulp.src('source/_assets/backgrounds/*.{jpg,png}')
    .pipe(imageResize({ 
      width : 1400,
      height : 700,
      crop : true,
      format: 'jpg',
      upscale : true
    }))
    .pipe(gulp.dest('_build/images/backgrounds/large/'))

    .pipe(imageResize({ 
      width : 1000,
      height : 500,
      crop : true,
      format: 'jpg',
      upscale : true
    }))
    .pipe(gulp.dest('_build/images/backgrounds/medium/'))

    .pipe(imageResize({ 
      width : 600,
      height : 300,
      crop : true,
      format: 'jpg',
      upscale : true
    }))
    .pipe(gulp.dest('_build/images/backgrounds/small/'))
});

gulp.task('images-pages', ['images-posts'], function () {
  gulp.src('source/_assets/pages/**/*.{jpg,png,gif}')
    .pipe(gulp.dest('_build/images/pages/'));
});


gulp.task('images-posts', ['sass-rebuild'], function () {
  gulp.src('source/_assets/posts/**/*.{jpg,png,gif}')
    .pipe(gulp.dest('_build/images/posts/'));
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




gulp.task('browser-sync', ['jekyll-rebuild','images-bg'], function() {
    browserSync({
        server: {
            baseDir: '_build'
        }
    });
});

// Watch for changes
gulp.task('watch', ['browser-sync'], function () {
    gulp.watch(['source/**/*.html', 'source/**/*.md', 'source/_theme/stylesheets/*.scss'], ['sass-rebuild']);
})


gulp.task('default', ['sass']);
gulp.task('build', ['images-bg']);

