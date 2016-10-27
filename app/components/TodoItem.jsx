var React = require('react');

var TodoItem = React.createClass({

    onToggle(e) {
        var id =this.props.id;
        this.props.onToggle(id);
    },
    render() {
        var {id, name, completed} = this.props;
        var key = this.key;
        return (
            <li className="clearfix" id={id} onClick={this.onToggle}>
                <div className="large-1 medium-1 small-1 columns">
                    <input type="checkbox" ref="checkStatus" checked={completed}/>
                </div>
                <label className="large-11 medium-11 small-11 columns">
                    {name}
                    <small>{completed}</small>
                </label>
            </li>
        );
    }
});

module.exports = TodoItem;
