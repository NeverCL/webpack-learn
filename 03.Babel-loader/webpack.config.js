module.exports = {
    entry: './app.jsx',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx/,
            loader: 'babel-loader?presets[]=es2015&presets[]=react'
        }]
    }
}