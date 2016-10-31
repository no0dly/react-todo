var React = require('react');
var TodoItem = require('TodoItem');

var TodoList = React.createClass({

    render() {
        var {todos} = this.props;
        var renderList = () => {
            if(todos.length === 0) {
                return (
                    <p className="container__message"> There is nothing to show</p>
                )
            }
            return todos.map( (todo) => {
                return <TodoItem key={todo.id} {...todo} onToggle={this.props.onToggle}/>
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

module.exports = TodoList;
