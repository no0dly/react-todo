var React = require('react');

var TodoSearch = React.createClass({

    render() {
        return (
            <div>
                <div>
                    <input type="text" ref="searchTodos" placeholder="Search todos" />
                </div>
                <div>
                    <label>
                        <input type="checkbox"/>
                        Show completed todos
                    </label>
                </div>
            </div>
        );
    }
});

module.exports = TodoSearch;
