# webpack-learn
webpack


## 目录

- entry

- mul-entry

- Babel-loader
  - npm i babel-loader babel-core babel-preset-es2015 babel-preset-react -D

- CSS-loader
  - npm i style-loader css-loader -D

- Image loader
  - npm i file-loader url-loader -D
  
- CSS Module
  - loader:'style-loader!css-loader?modules'

- UglifyJs Plugin
  - var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

- HTML Webpack Plugin and Open Browser Webpack Plugin
  - npm i html-webpack-plugin open-browser-webpack-plugin -D
  - webpack-dev-server

- DefinePlugin
  - new webpack.DefinePlugin({
        _DEV_: JSON.parse(process.env.DEBUG || 'false')
    })
  - set         //取环境变量
  - set DEBUG=true  //设置当前运行窗口的环境变量

- Code splitting
  - require.ensure('./a.js', function (require) {
        var content = require('./a.js');
        //..
    });

- Code splitting with bundle-loader
  - npm i bundle-loader -D

- Common chunk
  - new webpack.optimize.CommonsChunkPlugin('common.js')

- Vendor chunk
  - entry:{
        app:'./main.js',
        vender:['jquery']
    }
  - new webpack.optimize.CommonsChunkPlugin('vender','common.js')

- without writing require
  - providePlugin

- Exposing Global Variables
  - todo!!!

- Hot Module Replacement
  - webpack-dev-server --hot --inline