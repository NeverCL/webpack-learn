var webpack = require('webpack');

var common = webpack.optimize.CommonsChunkPlugin;

module.exports = {
    entry: {
        bundle1: './app1.jsx',
        bundle2: './app2.jsx',
    },
    output: {
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    plugins: [
        new common('init.js')
    ]
}