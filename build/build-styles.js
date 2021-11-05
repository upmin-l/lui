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
        dest: '../lib/styles'
    },
};
const url = '../src/styles/index.scss';

function clean() {
    return del(['lib/styles'])
}

function compile() {
    console.log(chalk.green.bgRed(`=   正在编译scss！ =`))
    return src(url).pipe(sass.sync()).pipe(autoPreFixer({
        Browserslist: ['last 2 versions', 'ie>9']
    }))
        // .pipe(cssMin())
        .pipe(rename('index.css'))
        .pipe(dest('../lib/styles'))
}

function copyFont() {
    return src('../examples/styles/fonts/**').pipe(cssMin()).pipe(dest('../lib/fonts'))
}

function is_watch() {
    watch(paths.styles.src, compile)
}

//todo gulp不支持ts？？？？
function buildSegregateCss() {
    components.forEach(compName=>{
        console.log(chalk.green(`${compName.name}.css`))
        src(`../src/styles/packages/${compName.name}.scss`)
            .pipe(sass.sync())
            .pipe(autoPreFixer({
                Browserslist: ['last 2 versions', 'ie>9']
            }))
            // .pipe(cssMin())
            .pipe(rename(`${compName.name}.css`))
            .pipe(dest('../lib/styles'));
    })
}
// buildSegregateCss
let build = series(clean, parallel(compile, copyFont,buildSegregateCss));

exports.compile = compile;
exports.is_watch = is_watch;
exports.copyFont = copyFont;
exports.buildSegregateCss = buildSegregateCss;
exports.default = build;
