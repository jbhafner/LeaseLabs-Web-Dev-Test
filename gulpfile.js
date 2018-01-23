var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    livereload = require('gulp-livereload'),
    webserver = require('gulp-webserver'),
    paths = {
        style_css: 'builds/css',
        style_sass: 'process/sass'
    },
    LOCAL_SERVER_PORT = 3001;

// styles task to convert scss -> css
gulp.task('sass', function () {
    return sass('process/sass/style.scss', {
      sourcemap: true,
      style: 'expanded'
    })
    .on('error', function (err) {
        console.error('Error!', err.message);
    })
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('builds/css'));
});

// Watch task
gulp.task('watch', function() {
    livereload.listen({
        start: true,
        reloadPage: 'builds/index.html'
    })
	gulp.watch(paths.style_sass + '*.scss',[sass]);
}) 

// Webserver
gulp.task('webserver', function() {
    gulp.src('./builds')
        .pipe(webserver({
            livereload: true,
            open: true,
            port: LOCAL_SERVER_PORT
        }));
});

// Default
gulp.task('default', ['watch', 'sass', 'webserver']);