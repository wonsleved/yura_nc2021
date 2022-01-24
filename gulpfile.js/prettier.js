const gulp = require('gulp');
const bSync = require('browser-sync').create();
const prettier = require('gulp-prettier');
const cache = require('gulp-cached');

const copyHtml = require('./compile-html').dev;
const compileLess = require('./compile-less').dev;
const paths = require('./paths');
const svgStore = require('./svg-store');

function makePrettier() {
  return gulp
    .src(['./src/**', `!${paths.html.src}`, `!${paths.svg.src}`], {base: './src/'})
    .pipe(cache())
    .pipe(prettier())
    .pipe(gulp.dest('./src'))
    .pipe( bSync.stream() );
}

function makePrettierHTML() {
  return gulp
    .src(paths.html.src, {base: './src/'})
    .pipe(cache())
    .pipe(prettier())
    .pipe(gulp.dest(paths.srcDir))
    .pipe( bSync.stream() );
}

module.exports = {
  html: makePrettierHTML,
  other: makePrettier
}

