var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var {Provider} = require('react-redux');
var $ = require('jQuery');
var TestUtils =  require('react-addons-test-utils');

var configureStore = require('configureStore');
import {Todo} from 'Todo';
import TodoList from 'TodoList';

describe('Todo main component',() => {
    it('Should exist', () => {
        expect(Todo).toExist();
    });
    it('Should render TodoList', () => {
        var store = configureStore.configure();
        var provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <Todo />
            </Provider>
        );

        var todoApp = TestUtils.scryRenderedComponentsWithType(provider, Todo)[0];
        var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

        expect(todoList.length).toEqual(1);
    });

});
