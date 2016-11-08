var moment = require('moment');
var uuid = require('node-uuid');

export var searchTextReducer = (state = '', action) => {
    switch(action.type) {
        case 'SET_SEARCH_TEXT':
            return action.searchText;

        default:
            return state;
    };
};

export var showCompledReducer = (state = false, action) => {
    switch(action.type) {
        case 'TOGGLE_SHOW_COMPLETED':
            return !state;

        default:
            return state;
    }
}

export var todoReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: uuid(),
                    name: action.newTodo,
                    completed: false,
                    date: moment().unix(),
                    completedAt: undefined
                }
            ]

        case 'TOGGLE_TODO':
            return state.map( (todo) => {
                if ( todo.id == action.id ) {
                    var nextCompleted = !todo.completed;

                    return {
                        ...todo,
                        completed: nextCompleted,
                        completedAt: nextCompleted ? moment().unix() : undefined
                    }
                }
            });
        default:
            return state;
    }
}
