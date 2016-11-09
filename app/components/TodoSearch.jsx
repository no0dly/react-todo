var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var TodoSearch = React.createClass({
    render() {
        var {dispatch, showCompleted, searchTodos} = this.props;
        return (
            <div className="container__header">
                <div>
                    <input type="text" ref="searchTodos" value={searchTodos} placeholder="Search todos" onChange={() => {
                            var searchTodos = this.refs.searchTodos.value;
                            dispatch(actions.searchText(searchTodos));
                        }}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" checked={showCompleted} ref="showCompleted" onChange={() => {
                                dispatch(actions.toggleShowCompleted());
                            }}/>
                        Show completed todos
                    </label>
                </div>
            </div>
        );
    }
});

export default connect(
    (state) => {
        return {
            showCompleted: state.showCompleted,
            searchTodos: state.searchTodos
        }
    }
)(TodoSearch);
