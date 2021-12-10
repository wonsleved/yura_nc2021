const { task, series }  = require('gulp');
const browserSync   = require('./browser-sync');
const prodTask      = require('./prod-task');
const mode = require('gulp-mode')({
    modes: ["production", "development"],
    default: "development",
    verbose: false
});
const prettier = require('./prettier');


const isProduction = mode.production();


if (isProduction) {
    task('default', prodTask);
} else {
    task('default', series(browserSync));
}

