const gulp      = require('gulp');
const bSync     = require('browser-sync').create();
const cache     = require('gulp-cached');
const prettier  = require('./prettier');

const compileHtml = require('./compile-html').dev;
const compileLess = require('./compile-less').dev;
const paths = require('./paths');
const svgStore = require('./svg-store');


const makePrettier      = prettier.other;
const makePrettierHTML  = prettier.html;


function devTask() {

    bSync.init({
        server: { 
            baseDir: paths.baseDir
        }
    });


    gulp.watch(paths.bsyncPaths.styles, gulp.series(compileLess) ).on('change', bSync.reload);
    gulp.watch(paths.bsyncPaths.html, gulp.series(compileHtml) ).on('change', bSync.reload);
    gulp.watch(paths.svg.src, gulp.series(compileHtml) ).on('change', bSync.reload);

    // gulp.watch(paths.bsyncPaths.styles, gulp.series(makePrettier, compileLess) ).on('change', bSync.reload);
    // gulp.watch(paths.bsyncPaths.html, gulp.series(makePrettierHTML, compileHtml) ).on('change', bSync.reload);
    // gulp.watch(paths.svg.src, gulp.series(compileHtml) ).on('change', bSync.reload);
}

module.exports = devTask;