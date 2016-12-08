var expect = require('expect');

var TestUtils =  require('react-addons-test-utils');
var TodoAPI = require('TodoAPI');

describe('TodoAPI',() => {
    // beforeEach( ()=> {
    //     localStorage.removeItem('todos');
    // });
    // it('should exist', () => {
    //     expect(TodoAPI).toExist();
    // });
    // describe('setTodos',() => {
    //     it('should set valid todo array', () => {
    //         var todos = [{
    //             name: 'name',
    //             id: 1,
    //             completed: false
    //         }];
    //         var exualTodos;
    //
    //         TodoAPI.setTodos(todos);
    //
    //         exualTodos = JSON.parse(localStorage.getItem('todos'));
    //
    //         expect(exualTodos).toEqual(todos);
    //     });
    //
    //     it('should return empty array', () => {
    //         var todos = 'holo';
    //
    //         TodoAPI.setTodos(todos);
    //
    //         expect(localStorage.getItem('todos')).toBe(null);
    //     });
    // });
    //
    // describe('getTodos',() => {
    //     it('should return empty array for bad localStorage data', () => {
    //         var actualTodos = TodoAPI.getTodos();
    //
    //         expect(actualTodos).toEqual([]);
    //     });
    //     it('should return todos if valid array in localStorage', () => {
    //         var todos = [{
    //             name: 'name',
    //             id: 1,
    //             completed: false
    //         }];
    //         var actualTodos;
    //         localStorage.setItem('todos', JSON.stringify(todos));
    //         actualTodos = TodoAPI.getTodos();
    //
    //         expect(actualTodos).toEqual(todos);
    //     });
    // });

    describe('filterTodo',() => {
        var todos = [{
            id: 1,
            name: 'some name',
            completed: true
        },{
            id: 2,
            name: 'some name 2',
            completed: true
        },{
            id: 3,
            name: 'go go go',
            completed: false
        }];

        it('Should return all todos if showCompled is true', () => {
            var filteredTodos =TodoAPI.filterTodo(todos, true, '');

            expect(filteredTodos.length).toBe(3);
        });

        it('Should return non-completed todos if showCompled is false', () => {
            var filteredTodos =TodoAPI.filterTodo(todos, false, '');

            expect(filteredTodos.length).toBe(1);
        });

        it('Should sort completed todo to the end of the list', () => {
            var filteredTodos =TodoAPI.filterTodo(todos, false, '');

            expect(filteredTodos[0].id).toBe(3);
        });

        it('Text filter should work', () => {
            var filteredTodos =TodoAPI.filterTodo(todos, true, 'some');

            expect(filteredTodos.length).toBe(2);
        });

        it('Should return all items if text input is empty', () => {
            var filteredTodos =TodoAPI.filterTodo(todos, true, '');

            expect(filteredTodos.length).toBe(3);
        });
    });
});
