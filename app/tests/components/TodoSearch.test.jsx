var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils =  require('react-addons-test-utils');

var TodoSearch = require('TodoSearch');

describe('Todo search component',() => {
    it('Should exist', () => {
        expect(TodoSearch).toExist();
    });

    it('Should call onSearch with entered input text', () => {
        var spy = expect.createSpy();

        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

        todoSearch.refs.searchTodos.value = "hleb";
        TestUtils.Simulate.change(todoSearch.refs.searchTodos);

        expect(spy).toHaveBeenCalledWith(false, 'hleb');
    });

    it('Should call onSearch with proper checked value', () => {
        var spy = expect.createSpy();

        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

        todoSearch.refs.showCompleted.checked = true;
        TestUtils.Simulate.change(todoSearch.refs.showCompleted);
        expect(spy).toHaveBeenCalledWith(true, '');
    });
});
