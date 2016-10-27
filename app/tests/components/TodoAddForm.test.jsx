var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils =  require('react-addons-test-utils');

var TodoAddForm = require('TodoAddForm');

describe('Todo add form component',() => {
    it('Should exist', () => {
        expect(TodoAddForm).toExist();
    });

    it('Should call onAddTodo prop with valid data', () => {
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<TodoAddForm onAddTodo={spy} />);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.newTodo.value = '123';

        TestUtils.Simulate.submit($el.closest('form')[0]);

        expect(spy).toHaveBeenCalledWith(
            {
                name:'123',
                completed: false
            }
        );
    });

    it('Should not call onAddTodo prop with invalid data', () => {
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<TodoAddForm onAddTodo={spy} />);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.newTodo.value = '';

        TestUtils.Simulate.submit($el.closest('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});
