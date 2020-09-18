const webpack = require('webpack');
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=8192'
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json'],
        alias: {
            'vue': '@vue/runtime-dom'
        }
    },
    plugins: [
        // new webpack.optimize.ModuleConcatenationPlugin(),
        new VueLoaderPlugin(),
    ],
}
