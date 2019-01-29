var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');


//  随机端口

module.exports = function (env) {
    return {
        devServer: {
            inline: true,
            port: 8080
        },
        module: {
            rules: [
                {
                    test: /\.ts?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.js']
        },
        entry: {
            bundle: './src/index.js'
        },
        output: {
            path: __dirname + '/dist',
            filename: 'js/[name]-[hash:8].js'
        },
        plugins: [
            new htmlWebpackPlugin({
                template: './index.htm'
            })
        ],
        mode: 'development'
    }
}
