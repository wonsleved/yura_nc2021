const paths = require('./paths');
const gulp  = require('gulp');
const bsync = require('browser-sync').create();

function copyFontsDev() {
  return gulp
    .src( paths.fonts.src )
    .pipe( gulp.dest(paths.fonts.dest) )
    .pipe( bsync.stream() );
}

function copyFontsProd() {
  return gulp
    .src( paths.fonts.src )
    .pipe( gulp.dest(paths.fonts.dest) );
}

const copyFonts = {
  prod: copyFontsProd,
  dev: copyFontsDev
}

module.exports = copyFonts;