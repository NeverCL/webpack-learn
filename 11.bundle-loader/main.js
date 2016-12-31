var load = require('bundle-loader!./a.js');

load(function(content){
    document.open();
    document.write(content);
    document.close();
})

