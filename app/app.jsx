var React      = require('react');
var ReactDOM   = require('react-dom');
var Todo       = require('Todo');
var {Provider} = require('react-redux');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(()=> {
    console.log('NewState ', store.getState());
});

$(document).foundation();

require('style!css!sass!AppCss')

ReactDOM.render(
    <Provider store={store}>
        <Todo/>
    </Provider>,
    document.getElementById('app')
);
