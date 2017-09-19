var gulp = require('gulp');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');

gulp.task('compress', function () {
    gulp.src('js/*.js')
        .pipe(babel({presets: ['es2015']}))
        .pipe(uglify().on('error',gutil.log))
        .pipe(gulp.dest('js'))
});
