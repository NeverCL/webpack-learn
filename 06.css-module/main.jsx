const React = require('react');
var DOM = require('react-dom');
var style = require('./app.css');


DOM.render(
    <div>
        <h1 className={style.h1}>Hello</h1>
        <h2 className='h2'>Hello2</h2>
    </div>
    , document.getElementById('root'));