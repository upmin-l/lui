// //编译scss
const {series, parallel, src, dest, watch} = require('gulp');
const sass = require('gulp-sass');
const autoPreFixer = require('gulp-autoprefixer');
const del = require('del');
const rename = require('gulp-rename');
const cssMin = require('gulp-cssmin');
const components = require('../components.json');
const chalk = require("chalk")
let paths = {
    styles: {
        src: '../src/styles/**/*.scss',
        dest: '../bag/styles'
    },
};
const url = '../src/styles/index.scss';

function clean() {
    return del(['bag/styles'])
}

function compile() {
    console.log(chalk.green.bgRed(`=   正在编译scss！ =`))
    return src(url).pipe(sass.sync()).pipe(autoPreFixer({
        browsers: ['last 2 versions', 'ie>9']
    }))
        // .pipe(cssMin())
        .pipe(rename('index.css'))
        .pipe(dest('../bag/styles'))
}

function copyFont() {
    return src('../examples/styles/fonts/**').pipe(cssMin()).pipe(dest('../bag/fonts'))
}

function is_watch() {
    watch(paths.styles.src, compile)
}

//todo gulp不支持ts？？？？
function buildSegregateCss(v) {
    Object.keys(components).forEach(compName => {
        src(`../src/styles/packages/${compName}.scss`)
            .pipe(sass.sync())
            .pipe(autoPreFixer({
                browsers: ['last 2 versions', 'ie>9']
            }))
            // .pipe(cssMin())
            .pipe(rename(`l-${compName}.css`))
            .pipe(dest('../bag/styles'));
    })
    v()
}
// buildSegregateCss
let build = series(clean, parallel(compile, copyFont,buildSegregateCss));

exports.compile = compile;
exports.is_watch = is_watch;
exports.copyFont = copyFont;
exports.buildSegregateCss = buildSegregateCss;
exports.default = build;
