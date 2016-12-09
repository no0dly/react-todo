var React      = require('react');
var ReactDOM   = require('react-dom');
var {Provider} = require('react-redux');

var Todo       = require('Todo');
var actions    = require('actions');
var store      = require('configureStore').configure();
var TodoAPI    = require('TodoAPI');

import firebase, {firebaseRef} from 'app/firebase';

// store.subscribe(()=> {
//     var state = store.getState();
//     console.log('NewState ', state);
//     TodoAPI.setTodos(state.todos);
// });
//
// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));

store.dispatch(actions.startAddTodos());
$(document).foundation();

require('style!css!sass!AppCss')

ReactDOM.render(
    <Provider store={store}>
        <Todo/>
    </Provider>,
    document.getElementById('app')
);
