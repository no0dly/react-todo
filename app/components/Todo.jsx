var React = require('react');
import * as Redux from 'react-redux';
import * as actions from 'actions';

import TodoAddForm from 'TodoAddForm';
import TodoList from 'TodoList';
import TodoSearch from 'TodoSearch';

export var Todo = React.createClass ({
    onLogout(e) {
        e.preventDefault();
        var {dispatch} = this.props;

        dispatch(actions.startLogout());
    },
    render() {
        return (
            <div className="todo-app">
                <div className="page-actions">
                    <a onClick={this.onLogout} href="#">Logout</a>
                </div>
                <h1 className="text-center todo-app__title">Todo app</h1>
                <div className="row">
                    <div className="small-centered medium-6 large-5 todo-app__wrap">
                        <div className="container">
                            <TodoSearch/>
                            <TodoList/>
                            <TodoAddForm/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

export default Redux.connect()(Todo);
