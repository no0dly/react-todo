import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Todo from 'Todo';
import Login from 'Login';

import firebase from 'app/firebase';

var requireLogin = (nextState, replace, next) => {
    if(!firebase.auth().currentUser) {
        replace('/');
    }
    next();
};

var redirectIfLoggedin = (nextState, replace, next) => {

    if(firebase.auth().currentUser) {
        replace('/todos');
    }
    next();
};

export default (
    <Router history={hashHistory}>
        <Route path='/'>
            <Route path='todos' component={Todo} onEnter={requireLogin}/>
            <IndexRoute component={Login} onEnter={redirectIfLoggedin}/>
        </Route>
    </Router>
);