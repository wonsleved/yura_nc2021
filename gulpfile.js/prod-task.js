const compileLess   = require('./compile-less').prod;
const copyHtml      = require('./compile-html').prod;
const copyFonts     = require('./copy-fonts').prod;
const clear         = require('./clear');
const { series, task } = require('gulp');

module.exports = series(clear, copyFonts, compileLess, copyHtml);