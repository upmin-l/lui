const path = require('path');
const {merge} = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.js');

module.exports = merge(webpackBaseConfig, {
    mode: "production",
    entry: {
        main: path.resolve(__dirname, '../src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, '../lib'),
        publicPath: '/lib/',
        filename: 'index.js',
        library: 'lui',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
});
