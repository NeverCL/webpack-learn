module.exports = {
    entry: {
        bundle1: './app1.js',//目标文件:原文件
        bundle2: './app2.js'
    },
    output: {
        filename: '[name].js'//[name]取目标文件名称
    }
};