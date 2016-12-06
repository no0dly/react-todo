import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import expect from 'expect';
import * as actions from 'actions';


var createMockStore = configureMockStore([thunk]);
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
            todo: {
                name: 'New todo',
                completed: false,
                date: 123123,
                completedAt: null
            }
        }

        var res = actions.addTodo(action.todo);

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

    it('Should generate addTodos action object', () => {
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

        var res = actions.addTodos(todos);

        expect(res).toEqual(action);
    });

    it('should create todo and dispatch todo', (done) => {
        const store = createMockStore({});
        const todoName = 'My todo item';

        store.dispatch(actions.startAddTodo(todoName)).then(function() {
            const actions = store.getActions();
            expect(actions[0].todo).toInclude({
                name: todoName
            });
            done();
        }).catch(done);
    });
});
