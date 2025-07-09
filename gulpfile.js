const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourceMaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function compressJS() {
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'))
}

function compileSass() {
    return gulp.src('./source/styles/main.scss')
    .pipe(sourceMaps.init())
    .pipe(sass())
    .pipe(sourceMaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'));
    }

function imgSquash() {
        return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'),  {encoding: false })
}

exports.default = function() {
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compileSass))
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(compressJS))
    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(imgSquash))
}
