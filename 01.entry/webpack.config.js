module.exports = {//CommonJS规范
    entry: './app',//注意./开头
    output: {
        path: 'dist',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],//默认是['', '.js']
    },
};
    
