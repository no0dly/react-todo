var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

var TodoSearch = require('TodoSearch');
var TodoAddForm = require('TodoAddForm');
import TodoList from 'TodoList';
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
    handleSearch( showCompleted, searchTodos){
        this.setState({
            showCompleted: showCompleted,
            searchTodos: searchTodos.toLowerCase()
        });
    },
    newTodoHandler(name) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    name: name,
                    completed: false,
                    date: moment().unix(),
                    completedAt: undefined
                }
            ]

        });
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
                            <TodoSearch onSearch={this.handleSearch}/>
                            <TodoList/>
                            <TodoAddForm onAddTodo={this.newTodoHandler}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Todo;
