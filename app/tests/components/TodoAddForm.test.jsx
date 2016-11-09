var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils =  require('react-addons-test-utils');

var {TodoAddForm} = require('TodoAddForm');

describe('Todo add form component',() => {
    it('Should exist', () => {
        expect(TodoAddForm).toExist();
    });

    it('Should dispatch ADD_TODO when valid todo text', () => {
        var todoName = 'Walk';
        var action = {
            type: 'ADD_TODO',
            newTodo: todoName
        }
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<TodoAddForm dispatch={spy} />);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.newTodo.value = todoName;

        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(action);
    });

    it('Should not dispatch action when invalid text', () => {
        var todoName = '';
        var action = {
            type: 'ADD_TODO',
            newTodo: todoName
        }
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<TodoAddForm dispatch={spy} />);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.newTodo.value = todoName;

        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});
