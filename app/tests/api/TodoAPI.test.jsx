var expect = require('expect');

var TestUtils =  require('react-addons-test-utils');
var TodoAPI = require('TodoAPI');

describe('TodoAPI',() => {
    beforeEach( ()=> {
        localStorage.removeItem('todos');
    });
    it('should exist', () => {
        expect(TodoAPI).toExist();
    });
    describe('setTodos',() => {
        it('should set valid todo array', () => {
            var todos = [{
                name: 'name',
                id: 1,
                completed: false
            }];
            var exualTodos;

            TodoAPI.setTodos(todos);

            exualTodos = JSON.parse(localStorage.getItem('todos'));

            expect(exualTodos).toEqual(todos);
        });

        it('should return empty array', () => {
            var todos = 'holo';

            TodoAPI.setTodos(todos);

            expect(localStorage.getItem('todos')).toBe(null);
        });
    });

    describe('getTodos',() => {
        it('should return empty array for bad localStorage data', () => {
            var actualTodos = TodoAPI.getTodos();

            expect(actualTodos).toEqual([]);
        });
        it('should return todos if valid array in localStorage', () => {
            var todos = [{
                name: 'name',
                id: 1,
                completed: false
            }];
            var actualTodos;
            localStorage.setItem('todos', JSON.stringify(todos));
            actualTodos = TodoAPI.getTodos();

            expect(actualTodos).toEqual(todos);
        });
    });
});
