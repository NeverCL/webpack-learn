var img1 = document.createElement('img');
var img2 = document.createElement('img');

// document.write(img1);
// document.write(img2);

document.body.appendChild(img1);
document.body.appendChild(img2);

img1.src = require('./small.png');
img2.src = require('./big.png');