var React = require('react');
var TodoSearch = require('TodoSearch');
var TodoAddForm = require('TodoAddForm');
var TodoList = require('TodoList');
var uuid = require('node-uuid');

var Todo = React.createClass ({
    getInitialState() {
        return {
            showCompled: false,
            searchTodos: '',
            todos: [
                {
                    id: uuid(),
                    name: 'Walk with dog',
                    completed: true
                },
                {
                    id: uuid(),
                    name: 'tytytyty',
                    completed: false
                }
            ]
        }
    },
    handleSearch( showCompleted, searchTodos){
        this.setState({
            showCompeled: showCompleted,
            searchTodos: searchTodos.toLowerCase()
        });
    },
    newTodoHandler(update) {
        update.id = uuid();
        this.setState({
            todos: [
                ...this.state.todos,
                update
            ]

        });
    },

    handleToggle(id) {
        var updatedTodos = this.state.todos.map( (todo) => {
            if ( todo.id == id ) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        this.setState({
            todos: updatedTodos
        });
    },
    render() {
        var {todos} = this.state;
        return (
            <div className="row todo-app">

                <h1 className="text-center todo-app__title">Todo app</h1>

                <div className="small-centered medium-8 large-6 todo-app__wrap">
                    <TodoSearch onSearch={this.handleSearch}/>
                    <TodoList todos={todos} onToggle={this.handleToggle}/>
                    <TodoAddForm onAddTodo={this.newTodoHandler}/>
                </div>
            </div>
        )
    }
});

module.exports = Todo;
