var React = require('react');

var TodoAddForm = React.createClass({
    onSubmit(e) {
        e.preventDefault();

        var newTodo = this.refs.newTodo.value;

        if( newTodo.length > 0 ) {
            this.refs.newTodo.value = '';
            this.props.onAddTodo(newTodo);
        } else {
            this.refs.newTodo.focus();
        }
    },
    render() {
        return (
            <div className="container__footer">
                <form onSubmit={this.onSubmit}>
                    <input type="text" ref="newTodo" placeholder="What do you need to do?" />
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        )
    }
});

module.exports = TodoAddForm;
