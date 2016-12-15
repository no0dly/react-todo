import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import expect from 'expect';
import * as actions from 'actions';
import firebase, {firebaseRef} from 'app/firebase';


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

    it('Should generate updateTodo action', () => {
        var updates = {completed: false};

        var action = {
            type: 'UPDATE_TODO',
            id: '122',
            updates
        };


        var res = actions.updateTodo(action.id, action.updates);

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

    it('Should generate login action object', () => {
        var action = {
            type: 'LOGIN',
            uid: 2321323123
        }

        var res = actions.login(action.uid);

        expect(res).toEqual(action);
    });

    it('Should generate logout action object', () => {
        var action = {
            type: 'LOGOUT'
        }

        var res = actions.logout();

        expect(res).toEqual(action);
    });

    describe('Tests with firebase',() => {
        var testTodoRef;
        var uid;
        var todosRef;

        beforeEach((done) => {
            var credential = firebase.auth.GithubAuthProvider.credential(process.env.GITHUB_ACCESS_TOKEN);
            firebase.auth().signInWithCredential(credential).then((user)=> {
                console.log(user);
                uid = user.uid;
                todosRef = firebaseRef.child(`users/${uid}/todos`);

                return todosRef.remove();
            }).then( ()=> {
                testTodoRef = todosRef.push();
                return testTodoRef.set({
                    name: 'Some text',
                    completed: false,
                    createdAt: 123242
                });
            })
            .then(()=> done())
            .catch(done);
        });

        afterEach((done) => {
            todosRef.remove().then(()=>done());
        });
        it('Should toggle todo and dispatch UPDATE_TODO action', (done) => {
            const store = createMockStore({auth: {uid}});
            const action = actions.startToggleTodo(testTodoRef.key, true);

            store.dispatch(action).then(() => {
                const mockActions = store.getActions();

                expect(mockActions[0]).toInclude({
                    type: 'UPDATE_TODO',
                    id: testTodoRef.key
                });

                expect(mockActions[0].updates).toInclude({
                    completed: true
                });
                done();
            }, done);
        });
        // it('Should add todos and dispatch ADD_TODOS action', (done) => {
        //     const store = createMockStore({auth: {uid}});
        //     const action = actions.startAddTodos();
        //
        //     store.dispatch(action).then(()=> {
        //         const mockActions = store.getActions();
        //         expect(mockActions[0]).toInclude({
        //             type: 'ADD_TODOS'
        //         });
        //         expect(mockActions[0].todos.length).toEqual(1);
        //         expect(mockActions[0].todos[0].name).toEqual('Some text');
        //         done();
        //     }, done);
        // });
        //
        // it('should create todo and dispatch todo', (done) => {
        //     const store = createMockStore({auth: {uid}});
        //     const todoName = 'My todo item';
        //
        //     store.dispatch(actions.startAddTodo(todoName)).then(function() {
        //         const actions = store.getActions();
        //         expect(actions[0].todo).toInclude({
        //             name: todoName
        //         });
        //         done();
        //     }).catch(done);
        // });

    });
});
