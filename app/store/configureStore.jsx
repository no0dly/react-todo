import * as redux from 'redux';
import thunk from 'redux-thunk';

import {searchTextReducer, showCompletedReducer, todoReducer} from 'reducers';

export var configure = (initialState  = {}) => {
    var reducer = redux.combineReducers({
        searchTodos: searchTextReducer,
        showCompleted: showCompletedReducer,
        todos: todoReducer
    });

    var store = redux.createStore(reducer, initialState, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
};