/********** REQUIRED DEPENDENCIES**********/

var gulp = require('gulp'),
    minifyCss = require('gulp-minify-css'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    compass = require('gulp-compass'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');

/********** SCRIPT TASKS **********/

gulp.task('scripts', function() {
   gulp.src(['app/assets/js/**/*.js', '!app/assets/js/**/*.min.js'])
       .pipe(plumber())
       .pipe(rename({suffix:'.min'}))
       .pipe(uglify())
       .pipe(gulp.dest('app/assets/js'))
       .pipe(reload({stream:true}));
});

/********** THIRD PARTY LIBS **********/

gulp.task('third-party-scripts', function() {
    gulp.src('bower_components/**/*.min.js')
        .pipe(plumber())
        .pipe(concat('thirdParty.min.js'))
        .pipe(gulp.dest('app/assets/js'));
});

gulp.task('third-party-css', function() {
    gulp.src('bower_components/**/*.min.css')
        .pipe(plumber())
        .pipe(concat('thirdParty.min.css'))
        .pipe(gulp.dest('app/assets/css'));
});

gulp.task('third-party', ['third-party-css', 'third-party-scripts' ]);

/********** SASS TASKS **********/

gulp.task('css', function() {
    gulp.src('app/assets/scss/**/*.scss')
        .pipe(plumber())
        .pipe(rename({suffix:'.min'}))
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCss())
        .pipe(gulp.dest('app/assets/css/'))
        .pipe(reload({stream:true}));
});

/********** HTML TASKS **********/

gulp.task('html', function() {
   gulp.src('app/**/*.html')
       .pipe(reload({stream:true}));
});

/********** BUILD TASKS **********/

gulp.task('build-html', function() {
   gulp.src('app/**/*.html')
       .pipe(gulp.dest('build/'));
});

gulp.task('build-css', function() {
   gulp.src('app/assets/css/**/*.css')
       .pipe(gulp.dest('build/assets/css'));
});

gulp.task('build-js', function() {
    gulp.src('app/assets/js/**/*.min.js')
        .pipe(gulp.dest('build/assets/js'));
});

gulp.task('build', ['build-html', 'build-css', 'build-js']);

/********** BROWSER-SYNC TASKS **********/

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});

/********** WATCH TASKS **********/

gulp.task('watch', function() {
    gulp.watch('app/assets/js/**/*.js', ['scripts']);
    gulp.watch('app/assets/scss/**/*.scss', ['css']);
    gulp.watch('app/**/*.html', ['html']);
});

/********** DEFAULT TASK **********/

gulp.task('default', ['scripts', 'css', 'html', 'browser-sync', 'third-party', 'watch']);
