export var searchText = (searchText) => {
    return {
        type: 'SET_SEARCH_TEXT',
        searchText
    }
}

export var toggleShowCompleted = () => {
    return {
        type: 'TOGGLE_SHOW_COMPLETED'
    }
}

export var addTodo  = (newTodo) => {
    return {
        type: 'ADD_TODO',
        newTodo
    }
}

export var toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}
