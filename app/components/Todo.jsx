var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

var TodoSearch = require('TodoSearch');
var TodoAddForm = require('TodoAddForm');
var TodoList = require('TodoList');
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

    handleToggle(id) {
        var updatedTodos = this.state.todos.map( (todo) => {
            if ( todo.id == id ) {
                todo.completed = !todo.completed;
                todo.completedAt = todo.completed ? moment().unix() : undefined;
            }
            return todo;
        });
        this.setState({
            todos: updatedTodos
        });
    },
    render() {
        var {todos, showCompleted, searchTodos} = this.state;
        var filteredTodos = TodoAPI.filterTodo(todos, showCompleted, searchTodos);
        return (
            <div className="row todo-app">
                <h1 className="text-center todo-app__title">Todo app</h1>

                <div className="small-centered medium-8 large-6 todo-app__wrap">
                    <TodoSearch onSearch={this.handleSearch}/>
                    <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
                    <TodoAddForm onAddTodo={this.newTodoHandler}/>
                </div>
            </div>
        )
    }
});

module.exports = Todo;
