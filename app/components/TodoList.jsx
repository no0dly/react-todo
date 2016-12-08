var React = require('react');
var {connect} = require('react-redux');

import TodoItem from 'TodoItem';
var TodoAPI = require('TodoAPI')
export var TodoList = React.createClass({

    render() {
        var {todos, showCompleted, searchTodos } = this.props;
        var renderList = () => {
            var filteredTodos = TodoAPI.filterTodo(todos, showCompleted, searchTodos);

            if(filteredTodos.length === 0 ) {
                return (
                    <li className="container__message"> There is nothing to show</li>
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
