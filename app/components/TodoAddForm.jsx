var React = require('react');

var TodoAddForm = React.createClass({
    onSubmit(e) {
        e.preventDefault();

        var newTodo = this.refs.newTodo.value;
        var newStatus = 'undone';
        var update = {};

        if( newTodo.length > 0 ) {

            update.name = newTodo;
            update.status = newStatus;

            this.refs.newTodo.value = '';
            this.props.onAddTodo(update);
        }
    },
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" ref="newTodo" placeholder="What do you need to do?" />
                <button className="button expanded">Add Todo</button>
            </form>
        )
    }
});

module.exports = TodoAddForm;
