"use strict";
// //编译scss
// const {series, parallel, src, dest, watch} = require('gulp');
// const sass = require('gulp-sass');
// const autoPreFixer = require('gulp-autoprefixer');
// const del = require('del');
// const rename = require('gulp-rename');
// const cssMin = require('gulp-cssmin');
//
//
// let paths = {
//     styles: {
//         src: '../examples/styles/**/*.scss',
//         dest: '../bag/lib/styles'
//     },
// };
// const url = '../examples/styles/index.scss';
//
// function clean() {
//     return del(['lib'])
// }
//
// function compile() {
//     return src(url).pipe(sass.sync()).pipe(autoPreFixer({
//         browsers: ['last 2 versions', 'ie>9']
//     }))
//         .pipe(cssMin())
//         .pipe(rename('index.css'))
//         .pipe(dest('../bag/lib/styles'))
// }
//
// function copyFont() {
//     return src('../examples/styles/fonts/**').pipe(cssMin()).pipe(dest('../bag/lib/fonts'))
// }
//
// function is_watch() {
//     watch(paths.styles.src, compile)
// }
//
// let build = series(clean, parallel(compile, copyFont));
// exports.compile = compile;
// exports.is_watch = is_watch;
// exports.copyFont = copyFont;
// exports.default = build;
