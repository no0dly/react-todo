var React = require('react');
var TodoSearch = require('TodoSearch');
var TodoAddForm = require('TodoAddForm');
var TodoList = require('TodoList');

var Todo = React.createClass ({
    getInitialState() {
        return {
            todoList: [
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
        var newtodos = this.state.todoList.push(update);
        this.setState({todos:newtodos});
    },
    render() {
        var {todoList} = this.state;
        return (
            <div className="row todo-app">

                <h1 className="text-center todo-app__title">Todo app</h1>

                <div className="small-centered medium-8 large-6 todo-app__wrap">
                    <TodoSearch/>
                    <TodoList todoList={todoList} />
                    <TodoAddForm onAddTodo={this.newTodoHandler}/>
                </div>
            </div>
        )
    }
});

module.exports = Todo;
