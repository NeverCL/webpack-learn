var webpack = require('webpack');
var common = webpack.optimize.CommonsChunkPlugin;

module.exports = {
    entry:{
        app:'./main.js',
        vender:['jquery']
    },
    output:{
        filename:'bundle.js'
    },
    plugins:[
        new common('vender','common.js')
    ]
}