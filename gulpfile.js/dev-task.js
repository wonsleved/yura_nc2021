const gulp = require('gulp');
const bSync = require('browser-sync').create();
const prettier = require('gulp-prettier');
const cache = require('gulp-cached');

const copyHtml = require('./copy-html').dev;
const compileLess = require('./compile-less').dev;
const paths = require('./paths');
const { dev } = require('./copy-html');

gulp.task('copy-html', copyHtml);
gulp.task('compile-less', compileLess);

function makePrettier() {
    return gulp
    .src('./src/**', {base: './src/'})
    .pipe(cache())  
    .pipe(prettier())
    .pipe(gulp.dest('./src'));
}

function makePrettierHTML() {
    return gulp
      .src(paths.html.src, {base: './src/'})
      .pipe(cache())
      .pipe(prettier())
      .pipe(gulp.dest(paths.srcDir));
}

gulp.task('make-prettier', makePrettier);
gulp.task('make-prettier-html', makePrettierHTML);

function devTask() {
    bSync.init({
        server: { 
            baseDir: paths.baseDir
        }
    });

    gulp.watch(paths.bsyncPaths.styles, gulp.series('make-prettier', 'compile-less') ).on('change', bSync.reload);
    gulp.watch(paths.bsyncPaths.html, gulp.series('make-prettier-html', 'copy-html') ).on('change', bSync.reload);
}

module.exports = devTask;