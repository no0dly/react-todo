var React = require('react');
var moment = require('moment');
var {connect} = require('react-redux');
var actions = require('actions');

export var TodoItem = React.createClass({

    onToggle(e) {
        var {id, dispatch} = this.props;
        dispatch(actions.toggleTodo(id));
    },
    render() {
        var {id, name, completed, date, completedAt} = this.props;
        var todoClassName = completed ? 'todoItem done' : 'todoItem';
        var renderDate = function() {
            var text,
                timestamp;

            if (completedAt) {
                text = "Completed ";
                timestamp = completedAt;
            } else {
                text = "Created ";
                timestamp = date;
            }

            return  text + moment.unix(timestamp).format('MMM D, YY @ h:mm a');
        }
        return (
            <li className={todoClassName} onClick={this.onToggle}>
                <div>
                    <input type="checkbox" ref="checkStatus" checked={completed}/>
                </div>
                <label className="large-11 medium-11 small-11 columns">
                    <p>{name}</p>
                    <p className="todoItem__date">{renderDate()}</p>
                </label>
            </li>
        );
    }
});

export default connect()(TodoItem);
