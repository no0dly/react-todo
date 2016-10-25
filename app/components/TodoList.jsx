var React = require('react');
var TodoItem = require('TodoItem');

var TodoList = React.createClass({
    render() {
        var {todos} = this.props;
        var renderList = function() {
            return todos.map( (todo) => {
                return <TodoItem key={todo.id} {...todo} />
            })
        }
        return (
            <div className="row">
                <ul className="todoList">
                    {renderList()}
                </ul>
            </div>
        );
    }
});

module.exports = TodoList;
