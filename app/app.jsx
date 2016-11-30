var React      = require('react');
var ReactDOM   = require('react-dom');
var {Provider} = require('react-redux');

var Todo       = require('Todo');
var actions    = require('actions');
var store      = require('configureStore').configure();
var TodoAPI    = require('TodoAPI');

store.subscribe(()=> {
    var state = store.getState();
    console.log('NewState ', state);
    TodoAPI.setTodos(state.todos);
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));
$(document).foundation();

require('style!css!sass!AppCss')

import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyC0H2buKUMyjbV6VG8OwW8Z-dgda-tIFFI",
    authDomain: "todo-app-9b988.firebaseapp.com",
    databaseURL: "https://todo-app-9b988.firebaseio.com",
    storageBucket: "todo-app-9b988.appspot.com",
    messagingSenderId: "899595068116"
};
firebase.initializeApp(config);

firebase.database().ref().set({
    appName: {
        name:'todo app',
        ver: '1.0.0'
    }
}).then(function() {
    console.log('firebase loaded');
}, function(e) {
    console.log('firebase error');
})

ReactDOM.render(
    <Provider store={store}>
        <Todo/>
    </Provider>,
    document.getElementById('app')
);
