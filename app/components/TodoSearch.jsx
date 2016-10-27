var React = require('react');

var TodoSearch = React.createClass({
    handleSearch() {
        var showCompleted = this.refs.showCompleted.checked;
        var searchTodos = this.refs.searchTodos.value;

        this.props.onSearch(showCompleted, searchTodos);
    },
    render() {
        return (
            <div>
                <div>
                    <input type="text" ref="searchTodos" placeholder="Search todos" onChange={this.handleSearch}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
                        Show completed todos
                    </label>
                </div>
            </div>
        );
    }
});

module.exports = TodoSearch;
