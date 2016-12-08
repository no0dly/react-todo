var $ = require('jQuery');

module.exports = {
    //localStorage
    // setTodos: function(todos) {
    //     if($.isArray(todos)) {
    //         localStorage.setItem('todos', JSON.stringify(todos));
    //
    //         return todos;
    //     }
    // },
    //
    // getTodos: function () {
    //     var stringTodos = localStorage.getItem('todos', todos);
    //     var todos = [];
    //
    //     try {
    //         todos = JSON.parse(stringTodos);
    //     } catch(e) {
    //
    //     }
    //
    //     return $.isArray(todos) ? todos : [];
    // },



    filterTodo: function (todos, showCompleted, searchTodos) {
        var filteredTodos = todos;

        //filtered by show completed checkbox
        filteredTodos = filteredTodos.filter( (todo) => {
            return !todo.completed || showCompleted;
        });
        //filtered by search field
        filteredTodos = filteredTodos.filter( (todo) => {
            var text = todo.name.toLowerCase();
            return text.indexOf( searchTodos ) !== -1 ? true : false;
        });

        //sort todos not completed first
        filteredTodos.sort((a,b) => {
            if( !a.completed && b.completed ) {
                return -1;
            } else if ( a.completed && !b.completed) {
                return 1;
            } else {
                return 0;
            }
        });

        return filteredTodos;
    }
}
