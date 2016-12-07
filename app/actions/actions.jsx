import moment from 'moment';

import firebase, {firebaseRef} from 'app/firebase';

export var searchText = (searchText) => {
    return {
        type: 'SET_SEARCH_TEXT',
        searchText
    }
}


export var toggleShowCompleted = () => {
    return {
        type: 'TOGGLE_SHOW_COMPLETED'
    };
};

export var addTodo  = (todo) => {
    return {
        type: 'ADD_TODO',
        todo
    };
};

export var startAddTodo = (name) => {
    return (dispatch, getState) => {
        var todo = {
            name,
            completed: false,
            date: moment().unix(),
            completedAt: null
        };
        var todoRef = firebaseRef.child('todos').push(todo);

        return todoRef.then(() => {
            dispatch(addTodo({
                ...todo,
                id: todoRef.key
            }));
        });
    };
};

export var addTodos = (todos) => {
    return {
        type: 'ADD_TODOS',
        todos
    };
};

export var updateTodo = (id, updates) => {
    return {
        type: 'UPDATE_TODO',
        id,
        updates
    };
};


export var startToggleTodo = (id, completed) => {
    return (dispatch, getState) => {
        var todoRef = firebaseRef.child(`todos/${id}`);
        var updates = {
            completed,
            completedAt: completed ? moment().unix() : null
        }

        debugger;
        return todoRef.update(updates).then(function() {
            dispatch(updateTodo(id, updates));
        });
    }
}
