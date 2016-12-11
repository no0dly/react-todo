var React      = require('react');
var ReactDOM   = require('react-dom');
var {Provider} = require('react-redux');
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

var actions    = require('actions');
var store      = require('configureStore').configure();
var TodoAPI    = require('TodoAPI');

import Todo from 'Todo';
import Login from 'Login';
import firebase, {firebaseRef} from 'app/firebase';

store.dispatch(actions.startAddTodos());
$(document).foundation();

require('style!css!sass!AppCss')

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/'>
                <Route path='todos' component={Todo} />
                <IndexRoute component={Login} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
