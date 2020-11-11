const path = require('path');
const {merge} = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.js');
const components = require('../components.json');

const basePath = path.resolve(__dirname, '../');

let entries = {};


Object.keys(components).forEach(key => {
    entries[key] = path.join(basePath, components[key]);
});
module.exports = merge(webpackBaseConfig, {
    mode: "production",
    entry: components,
    output: {
        path: path.resolve(__dirname, '../bag'),
        publicPath: '/bag/',
        filename: '[name].js',
        chunkFilename: '[id].js',
        umdNamedDefine: true,
        libraryTarget: 'commonjs2'

    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    module: {
        rules: [
            {
                test: /\.(jsx?|babel|es6)$/,
                include: process.cwd(),
                exclude: /node_modules|utils\/popper\.js|utils\/date\.js/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    compilerOptions: {
                        preserveWhitespace: false
                    }
                }
            }
        ]
    },
});
