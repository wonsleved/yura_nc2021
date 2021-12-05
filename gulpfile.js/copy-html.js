const paths = require('./paths');
const gulp  = require('gulp');
const bsync = require('browser-sync').create();

function copyHtmlDev() {
    return gulp
    .src( paths.html.src )
    .pipe( gulp.dest(paths.html.dest) )
    .pipe( bsync.stream() );
};

function copyHtmlProd() {
    return gulp
    .src( paths.html.src )
    .pipe( gulp.dest(paths.html.dest) )
    .pipe( bsync.stream() );
};

const copyHtml = {
    prod: copyHtmlDev,
    dev: copyHtmlProd
}

module.exports = copyHtml;