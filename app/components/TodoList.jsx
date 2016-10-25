var React = require('react');
var TodoItem = require('TodoItem');

var TodoList = React.createClass({
    render() {
        var {todoList} = this.props;
        var renderList = function() {
            return todoList.map( (todo) => {
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
