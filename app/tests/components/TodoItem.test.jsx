var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils =  require('react-addons-test-utils');

var {TodoItem} = require('TodoItem');

import * as actions from 'actions';

describe('TodoItem component',() => {
    it('Should exist', () => {
        expect(TodoItem).toExist();
    });

    it('Should dispatch TOGGLE_TODO action on click', () => {
        var todoData = {
            id: 5,
            text: 'Write todo test',
            completed: true
        };
        var spy = expect.createSpy();
        var action = actions.startToggleTodo(todoData.id, !todoData.completed);
        var todoItem = TestUtils.renderIntoDocument(<TodoItem {...todoData} dispatch={spy} />);

        var $el = $(ReactDOM.findDOMNode(todoItem));

        TestUtils.Simulate.click($el[0]);

        expect(spy).toHaveBeenCalledWith(action);
    });
});
