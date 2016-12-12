import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {hashHistory} from 'react-router';

var actions = require('actions');
var store   = require('configureStore').configure();

import firebase, {firebaseRef} from 'app/firebase';
import router from 'app/router';

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(actions.login(user.uid));
        store.dispatch(actions.startAddTodos());
        hashHistory.push('/todos');
    } else {
        store.dispatch(actions.logout());
        if ( hashHistory.getCurrentLocation().pathname !== '/' ) {
            hashHistory.push('/');
        }
    }
})

$(document).foundation();

require('style!css!sass!AppCss')

ReactDOM.render(
    <Provider store={store}>
        {router}
    </Provider>,
    document.getElementById('app')
);
