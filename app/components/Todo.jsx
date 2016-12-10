var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import TodoAddForm from 'TodoAddForm';
import TodoList from 'TodoList';
import TodoSearch from 'TodoSearch';

var Todo = React.createClass ({
    render() {
        return (
            <div className="todo-app">
                <div className="page-actions">
                    <a href="#">Logout</a>
                </div>
                <h1 className="text-center todo-app__title">Todo app</h1>
                <div className="row">
                    <div className="small-centered medium-6 large-5 todo-app__wrap">
                        <div className="container">
                            <TodoSearch/>
                            <TodoList/>
                            <TodoAddForm/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Todo;
