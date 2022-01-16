const gulp = require('gulp');
const paths = require('./paths');
const svgstore = require('gulp-svgstore');
const inject = require('gulp-inject');
const rename = require('gulp-rename');

module.exports = function svgStore() {
  const svgs = gulp
    .src(paths.svg.src)
    .pipe(rename({prefix: 'svg-icon-'}))
    .pipe(svgstore({ inlineSvg: true }));

  function fileContents(filePath, file) {
    return file.contents.toString();
  }

  return inject(svgs, { transform: fileContents });
}