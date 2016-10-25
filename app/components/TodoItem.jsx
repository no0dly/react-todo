var React = require('react');

var TodoItem = React.createClass({

    todoAction(e) {
        console.log(this);
    },
    render() {
        var {name, status} = this.props;
        var key = this.key;
        return (
            <li className="clearfix"  id={key} onClick={this.todoAction}>
                <div className="large-1 medium-1 small-1 columns">
                    <input type="checkbox" />
                </div>
                <label className="large-11 medium-11 small-11 columns">
                    {name}
                    <small>{status}</small>
                </label>
            </li>
        );
    }
});

module.exports = TodoItem;
