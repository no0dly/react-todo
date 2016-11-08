var expect = require('expect');
var actions = require('actions');

describe('Action tests',() => {
    it('Should generate search text action', () => {
        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText: "bla, bla"
        }

        var res = actions.searchText(action.searchText);

        expect(res).toEqual(action);
    });

    it('Should generate newTodo action', () => {
        var action = {
            type: 'ADD_TODO',
            newTodo: 'Walk'
        }

        var res = actions.addTodo(action.newTodo);

        expect(res).toEqual(action);
    });

    it('Should generate toggleShowCompleted action', () => {
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        }

        var res = actions.toggleShowCompleted();

        expect(res).toEqual(action);
    });

    it('Should generate toggleTodo action', () => {
        var action = {
            type: 'TOGGLE_TODO',
            id: '2'
        }

        var res = actions.toggleTodo(action.id);

        expect(res).toEqual(action);
    });

});
