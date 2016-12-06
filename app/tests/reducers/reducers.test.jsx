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
                todo: {
                    id: 'abc123',
                    name: 'New todo',
                    completed: false,
                    date: 123123,
                    completedAt: null
                }
            }

            var res = reducers.todoReducer(df(''), df(action));

            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(action.todo);
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

        it('Should add existing todos', () => {
            var todos = [{
                id: 1,
                name: 'anithing',
                completed: false,
                completedAt: undefined,
                date: 1000
            }];

            var action = {
                type: 'ADD_TODOS',
                todos
            };

            var res = reducers.todoReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(todos[0]);
        });
    });
});
