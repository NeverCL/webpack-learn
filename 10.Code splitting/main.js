require.ensure('./a.js', function (require) {
    var content = require('./a.js');
    document.open();
    document.write(content);
    document.close();
})