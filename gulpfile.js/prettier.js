const paths = require('./paths');
const gulp  = require('gulp');
const prettier = require('gulp-prettier');


module.exports = function() {
    return gulp
    .src(paths.srcDir + '/**')
    .pipe(prettier({ singleQuote: true }))
    .pipe(paths.srcDir);
}
