const gulp      = require('gulp');
const paths      = require('./paths');
const clean     = require('gulp-clean');

function clear() {
  return gulp
    .src(paths.destDir, {allowEmpty: true})
    .pipe(clean({force: true}))
    .pipe(gulp.dest(paths.destDir));
}

module.exports = clear;