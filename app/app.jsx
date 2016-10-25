var React      = require('react');
var ReactDOM   = require('react-dom');
var Todo       = require('Todo');

$(document).foundation();

require('style!css!sass!AppCss')

ReactDOM.render(
    <Todo/>,
    document.getElementById('app')
);
