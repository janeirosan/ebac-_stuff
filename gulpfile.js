const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function compressJS() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
}

function compileSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

function imgSquash() {
    return gulp .src("./sources/images/")
    .pipe(imagemin())
    .pipe(gulp.dest("./build/images"));
    }

gulp.task("imgSquash", imgSquash);

gulp.task("watch", () => {
    gulp.watch("./source/image/*", imgSquash)
});


exports.default = gulp;
exports.sass = compileSass;
exports.watch = function() {
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compileSass))
}
exports.compressJS = compressJS;

