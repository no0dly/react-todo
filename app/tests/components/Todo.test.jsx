var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils =  require('react-addons-test-utils');

var Todo = require('Todo');

describe('Todo main component',() => {
    it('Should exist', () => {
        expect(Todo).toExist();
    });

    it('Should add todo to the todos state on handleAddTodo', () => {
        var newTodo = {
            name: 'test text',
            completed: false
        };
        var todoApp = TestUtils.renderIntoDocument(<Todo />);

        todoApp.setState({
            todos:[]
        });
        todoApp.newTodoHandler(newTodo);

        expect(todoApp.state.todos[0].name).toBe(newTodo.name);
    });
});
