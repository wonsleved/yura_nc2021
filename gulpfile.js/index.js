const { task, series }  = require('gulp');
const prodTask      = require('./prod-task');
const devTask       = require('./dev-task');
const mode = require('gulp-mode')({
    modes: ["production", "development"],
    default: "development",
    verbose: false
});


const isProduction = mode.production();


if (isProduction) {
    task('default', prodTask);
} else {
    task('default', series(prodTask, devTask));
}

