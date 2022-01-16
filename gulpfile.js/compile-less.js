const paths = require('./paths');
const gulp  = require('gulp');
const less  = require('gulp-less');
const bsync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');

function compileLessDev() {
    return gulp
      .src( paths.styles.src )
      .pipe( sourcemaps.init() )
      .pipe( less() )
      .pipe( sourcemaps.write() )
      .pipe( gulp.dest(paths.styles.dest) )
      .pipe( bsync.stream() );
};

function compileLessProd() {
    return gulp
      .src( paths.styles.src )
      .pipe( less() )
      .pipe( gulp.dest(paths.styles.dest) );
};

const compileLess = {
    prod: compileLessDev,
    dev: compileLessProd
}

module.exports = compileLess;