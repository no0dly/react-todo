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
        var newName = 'test text';
        var todoApp = TestUtils.renderIntoDocument(<Todo />);

        todoApp.setState({
            todos:[]
        });
        todoApp.newTodoHandler(newName);

        expect(todoApp.state.todos[0].name).toBe(newName);
        expect(todoApp.state.todos[0].date).toBeA('number');
    });

    it('should toggle completed value when handleToggle called', () => {
        var todoData = {
            id: 11,
            name: 'Some name',
            completed: false,
            date: 0,
            completedAt: undefined
        }

        var todoApp = TestUtils.renderIntoDocument(<Todo/>);

        todoApp.setState({
            todos: [todoData]
        });
        expect(todoApp.state.todos[0].completed).toBe(false);
        todoApp.handleToggle(11);
        expect(todoApp.state.todos[0].completed).toBe(true);

        expect(todoApp.state.todos[0].completedAt).toBeA('number');
    });

    it('Should remove completedAt when toggle from true to false', () => {
        var todoData = {
            id: 11,
            name: 'Some name',
            completed: true,
            date: 0,
            completedAt: 200
        }

        var todoApp = TestUtils.renderIntoDocument(<Todo/>);

        todoApp.setState({
            todos: [todoData]
        });

        todoApp.handleToggle(11);

        expect(todoApp.state.todos[0].completedAt).toNotExist();
    });
});
