
export const AppReducer = (state, action) => {
    console.log("AppReducer: " + action.type + ' ' + action);
    
    switch(action.type) {
        case 'ADD_TODO_ITEM':
            return { 
                ...state, 
                todoList: [...state.todoList, action.item]
            }
        case 'DELETE_TODO_ITEM':
            return {                 
                ...state,
                todoList: state.todoList.filter( (item, index) => index != action.index)
            } 
        case 'CLEAR_TODOLIST':
            return { 
                ...state,
                todoList: []
            }
        default:
            return state;
    }
}