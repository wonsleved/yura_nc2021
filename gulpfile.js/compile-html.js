const paths = require('./paths');
const gulp  = require('gulp');
const bsync = require('browser-sync').create();
const svgStore = require('./svg-store');

function compileHtmlDev() {
    return gulp
      .src( paths.html.src )
      .pipe( svgStore() )
      .pipe( gulp.dest(paths.html.dest) )
      .pipe( bsync.stream() );
}

function compileHtmlProd() {
    return gulp
      .src( paths.html.src )
      .pipe( svgStore() )
      .pipe( gulp.dest(paths.html.dest) );
}

const compileHtml = {
    prod: compileHtmlProd,
    dev: compileHtmlDev
}

module.exports = compileHtml;