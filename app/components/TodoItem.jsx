var React = require('react');
var moment = require('moment');

var TodoItem = React.createClass({

    onToggle(e) {
        var id =this.props.id;
        this.props.onToggle(id);
    },
    render() {
        var {id, name, completed, date, completedAt} = this.props;
        var key = this.key;
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

            return  text + moment.unix(timestamp).format('MMM D, YY @ h:mm a');;
        }
        return (
            <li className="clearfix" key={id} onClick={this.onToggle}>
                <div className="large-1 medium-1 small-1 columns">
                    <input type="checkbox" ref="checkStatus" checked={completed}/>
                </div>
                <label className="large-11 medium-11 small-11 columns">
                    {name}
                    <small>{renderDate()}</small>
                </label>
            </li>
        );
    }
});

module.exports = TodoItem;
