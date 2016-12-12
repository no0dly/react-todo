import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {hashHistory} from 'react-router';

var actions    = require('actions');
var store      = require('configureStore').configure();

import firebase, {firebaseRef} from 'app/firebase';
import router from 'app/router';

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        hashHistory.push('/todos');
    } else {
        hashHistory.push('/');
    }
})


store.dispatch(actions.startAddTodos());

$(document).foundation();

require('style!css!sass!AppCss')

ReactDOM.render(
    <Provider store={store}>
        {router}
    </Provider>,
    document.getElementById('app')
);
