var React = require('react');
var {connect} = require('react-redux');

import TodoItem from 'TodoItem';

export var TodoList = React.createClass({

    render() {
        var {todos} = this.props;
        var renderList = () => {
            if(todos.length === 0) {
                return (
                    <p className="container__message"> There is nothing to show</p>
                )
            }
            return todos.map( (todo) => {
                return <TodoItem key={todo.id} {...todo}/>
            })
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
    (store) => {
        return {
            todos: store.todos
        }
    }
)(TodoList);
