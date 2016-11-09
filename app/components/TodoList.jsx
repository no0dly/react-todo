var React = require('react');
var {connect} = require('react-redux');

import TodoItem from 'TodoItem';
var TodoAPI = require('TodoAPI')
export var TodoList = React.createClass({

    render() {
        var {todos, showCompleted, searchTodos } = this.props;
        var renderList = () => {
            if(todos.length === 0) {
                return (
                    <p className="container__message"> There is nothing to show</p>
                )
            }
            return TodoAPI.filterTodo(todos, showCompleted, searchTodos).map( (todo) => {
                return <TodoItem key={todo.id} {...todo}/>
            });
        }
        return (
            <div className="container__list">
                <ul className="todoList">
                    {renderList()}
                </ul>
            </div>
        );
    }
});

export default connect(
    (state) => {
        return state;
    }
)(TodoList);
