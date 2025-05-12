const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourceMaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');


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
    
    async function imgSquash() {
        const imagemin = (await import('gulp-imagemin')).default;
        return gulp.src('./source/images/*') 
        .pipe(imagemin()) 
    .pipe(gulp.dest('./build/images'))
}

function gulpDef(cb) {
    gulp.task("imgSquash", imgSquash);
    
    gulp.task("watch", () => {
        gulp.watch("./source/images/*", imgSquash)
    });

    cb();
}


exports.default = gulpDef;
exports.sass = compileSass;
exports.watch = function() {
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compileSass))
}
exports.compressJS = compressJS;

return gulp.src('./source/images/*', { 
    encoding: false 
})