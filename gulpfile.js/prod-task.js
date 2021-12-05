const compileLess   = require('./compile-less').prod;
const copyHtml      = require('./copy-html').prod;
const { series, task } = require('gulp');

task('compile-less', compileLess);
task('copy-html', copyHtml);

module.exports = series('compile-less', 'copy-html');
