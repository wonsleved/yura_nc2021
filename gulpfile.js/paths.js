const paths = {
    baseDir: './dist/',
    srcDir: '/src/',
    styles: {
        src: './src/styles/index.less',
        dest: './dist/styles/'
    },
    html: {
        src: './src/index.html',
        dest: './dist/'
    },
    bsyncPaths: {
        styles: './src/**/*.less',
        html: './src/*.html'
    }
}

module.exports = paths;