var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");

gulp.task('minifyCSS', function() {
    gulp.src('./src/scss/*.scss')
        .pipe(concat('all.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS({compatibility: 'ie8'}))
        .pipe(rename(function(path){
            path.basename += ".min";
            path.extname = ".css";
        }))
        .pipe(gulp.dest('./dest/css'))
})

gulp.task('gulp-uglify', function() {
    gulp.src('./src/js/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(rename(function(path) {
            path.basename += ".min";
            path.extname = ".js";
        }))
        .pipe(gulp.dest('./dest/js'))
})

gulp.task('jade', function() {
    gulp.src('./jade/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./'))
})

gulp.task('watch', function() {
    gulp.watch('./src/scss/*.scss', ['minifyCSS']);
    gulp.watch('./src/js/*.js', ['gulp-uglify']);
    gulp.watch('./twig/*.jade', ['jade']);
})

gulp.task('default', ['watch', 'jade', 'minifyCSS', 'gulp-uglify'])