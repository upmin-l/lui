"use strict";
//编译scss
var _a = require('gulp'), series = _a.series, parallel = _a.parallel, src = _a.src, dest = _a.dest, watch = _a.watch;
var sass = require('gulp-sass');
var autoPreFixer = require('gulp-autoprefixer');
var del = require('del');
var rename = require('gulp-rename');
var cssMin = require('gulp-cssmin');
var paths = {
    styles: {
        src: '../src/styles/**/*.scss',
        dest: '../dist/lib/styles'
    },
};
var url = '../src/styles/index.scss';
function clean() {
    return del(['lib']);
}
function compile() {
    return src(url).pipe(sass.sync()).pipe(autoPreFixer({
        browsers: ['last 2 versions', 'ie>8']
    }))
        .pipe(cssMin())
        .pipe(rename('index.css'))
        .pipe(dest('../dist/lib/styles'));
}
function copyFont() {
    return src('../src/styles/fonts/**').pipe(cssMin()).pipe(dest('../dist/lib/fonts'));
}
function is_watch() {
    watch(paths.styles.src, compile);
}
var build = series(clean, parallel(compile, copyFont));
exports.compile = compile;
exports.is_watch = is_watch;
exports.copyFont = copyFont;
exports.default = build;
