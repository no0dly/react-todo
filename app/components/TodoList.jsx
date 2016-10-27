var React = require('react');
var TodoItem = require('TodoItem');

var TodoList = React.createClass({

    render() {
        var {todos} = this.props;
        var renderList = () => {
            return todos.map( (todo) => {
                return <TodoItem key={todo.id} {...todo} onToggle={this.props.onToggle}/>
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
