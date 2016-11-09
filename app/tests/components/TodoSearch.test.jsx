var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils =  require('react-addons-test-utils');

import {TodoSearch} from 'TodoSearch';

describe('Todo search component',() => {
    it('Should exist', () => {
        expect(TodoSearch).toExist();
    });

    it('Should dispatch SET_SEARCH_TEXT on input change', () => {
        var text = 'hleb'
        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText: text
        }
        var spy = expect.createSpy();

        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

        todoSearch.refs.searchTodos.value = text;
        TestUtils.Simulate.change(todoSearch.refs.searchTodos);

        expect(spy).toHaveBeenCalledWith(action);
    });

    it('Should dispatch TOGGLE_SHOW_COMPLETED when checkbox changed', () => {
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        }
        var spy = expect.createSpy();

        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

        TestUtils.Simulate.change(todoSearch.refs.showCompleted);
        expect(spy).toHaveBeenCalledWith(action);
    });
});
