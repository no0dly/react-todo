var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var {Provider} = require('react-redux');
var $ = require('jQuery');
var TestUtils =  require('react-addons-test-utils');

import {configure} from 'configureStore';
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodoItem, {TodoItem} from 'TodoItem';

describe('TodoList component',() => {
    it('Should exist', () => {
        expect(TodoList).toExist();
    });

    it('should render one Todo component for each todo item', () => {
        var todos = [
            {
                id: "0",
                name: "bla bla",
                completed: false,
                completedAt: undefined,
                date: 500
            },
            {
                id: "1",
                name: "bla bla2",
                completed: false,
                completedAt: undefined,
                date: 500
            }
        ];
        var store = configure({
            todos
        });
        var provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <ConnectedTodoList />
            </Provider>
        );
        var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
        var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodoItem);
        expect(todosComponents.length).toBe(todos.length);
    });

    it('should render message if no todos', () => {
        var todos = [];
        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        var $el = $(ReactDOM.findDOMNode(todoList));

        expect($el.find('.container__message').length).toBe(1);
    });
});
