const compileLess   = require('./compile-less').prod;
const copyHtml      = require('./compile-html').prod;
const { series, task } = require('gulp');

module.exports = series(compileLess, copyHtml);
