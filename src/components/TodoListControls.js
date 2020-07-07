
import React, { useContext, useState } from 'react';
import { AppContext } from '../contexts/AppContext';

const TodoListControls = () => {
    const { dispatch } = useContext(AppContext);
    const [todoText, updateTodoText] = useState("");

    const handleTextUpdate = (event) => {
        updateTodoText(event.target.value);
    }

    const handleAdd = () => {
        if(todoText == "") return;
        dispatch( {type:'ADD_TODO_ITEM', item:todoText });
        updateTodoText("");
    }

    const handleClear = () => {
        dispatch( {type:'CLEAR_TODOLIST'});
    }

    return (
        <div className="todo-controls">
            <input class="todo-input"  type="text" value={todoText} placeholder="Add Todo Item" onChange={handleTextUpdate}/>
            <div className="todo-button-group">
                <button class="todo-add-button" onClick={handleAdd}> ADD </button>
                <button class="todo-clear-button" onClick={handleClear}> Clear </button>
            </div>
 </div>
    )
}

export default TodoListControls;