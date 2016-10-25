var React = require('react');
var TodoSearch = require('TodoSearch');
var TodoAddForm = require('TodoAddForm');
var TodoList = require('TodoList');

var Todo = React.createClass ({
    getInitialState() {
        return {
            todos: [
                {
                    id: '0',
                    name: 'Walk with dog',
                    status: 'undone'
                },
                {
                    id: '1',
                    name: 'tytytyty',
                    status: 'undone'
                }
            ]
        }
    },
    newTodoHandler(update) {
        debugger;
        var newTodos = this.state.todos;
        newTodos.push(update);
        this.setState({todos:newTodos});
    },
    render() {
        var {todos} = this.state;
        return (
            <div className="row todo-app">

                <h1 className="text-center todo-app__title">Todo app</h1>

                <div className="small-centered medium-8 large-6 todo-app__wrap">
                    <TodoSearch/>
                    <TodoList todos={todos} />
                    <TodoAddForm onAddTodo={this.newTodoHandler}/>
                </div>
            </div>
        )
    }
});

module.exports = Todo;
