var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import TodoAddForm from 'TodoAddForm';
import TodoList from 'TodoList';
import TodoSearch from 'TodoSearch';
var TodoAPI = require('TodoAPI');

var Todo = React.createClass ({
    getInitialState() {
        return {
            showCompled: false,
            searchTodos: '',
            todos: TodoAPI.getTodos()
        }
    },
    componentDidUpdate() {
        TodoAPI.setTodos(this.state.todos);
    },
    render() {
        var {todos, showCompleted, searchTodos} = this.state;
        var filteredTodos = TodoAPI.filterTodo(todos, showCompleted, searchTodos);
        return (
            <div className="todo-app">
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
