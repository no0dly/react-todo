var React      = require('react');
var ReactDOM   = require('react-dom');
var Todo       = require('Todo');
var {Provider} = require('react-redux');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(()=> {
    console.log('NewState ', store.getState());
});

store.dispatch(actions.addTodo('Pipi'));
store.dispatch(actions.searchText('Pipi'));
store.dispatch(actions.toggleShowCompleted());

$(document).foundation();

require('style!css!sass!AppCss')

ReactDOM.render(
    <Provider store={store}>
        <Todo/>
    </Provider>,
    document.getElementById('app')
);
