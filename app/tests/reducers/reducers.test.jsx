var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers',() => {
    describe('searchTextReducer',() => {
        it('should setSerchText', () => {
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'dog'
            };

            var res = reducers.searchTextReducer(df(''), df(action));

            expect(res).toEqual(action.searchText);
        });
    });

    describe('showCompletedReducer',() => {
        it('Should toggle false to true', () => {
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            };

            var res = reducers.showCompletedReducer(df(''), df(action));

            expect(res).toEqual(true);
        });
    });

    describe('todoReducer',() => {
        it('Should add todo with right text', () => {
            var action = {
                type: 'ADD_TODO',
                newTodo: 'Bla bla'
            }

            var res = reducers.todoReducer(df(''), df(action));

            expect(res[0].name).toEqual(action.newTodo);
        });

        it('Should toggle todo', () => {
            var state = [{
                id: 1,
                name: 'bla1',
                completed: false,
                date:333,
                completedAt: undefined
            },{
                id: 2,
                name: 'bla2',
                completed: true,
                date: 4444,
                completedAt: 4444
            }]
            var action = {
                type: 'TOGGLE_TODO',
                id: 2
            }

            var res = reducers.todoReducer(df(state), df(action));

            expect(res[1].completed).toEqual(false);
            expect(res[1].completedAt).toEqual(undefined);
        });
    });
});
