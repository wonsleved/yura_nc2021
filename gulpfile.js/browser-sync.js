const paths = require('./paths');
const gulp  = require('gulp');
const bsync = require('browser-sync').create();

const compileLess   = require('./compile-less').dev;
const copyHtml      = require('./copy-html').dev;
 
gulp.task('compile-less', compileLess);
gulp.task('copy-html', copyHtml);

function browserSync() {
    bsync.init({
        server: { 
            baseDir: paths.baseDir
        }
    });

    gulp.watch(paths.bsyncPaths.styles, gulp.series('compile-less') ).on('change', bsync.reload);
    gulp.watch(paths.bsyncPaths.html, gulp.series('copy-html') ).on('change', bsync.reload);
};

module.exports = browserSync;