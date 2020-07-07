import React, { useContext } from 'react';
import AppContextProvider from '../contexts/AppContext';
import { AppContext } from '../contexts/AppContext';

const TodoList = () => {

    const { state, dispatch } = useContext(AppContext);

    const handleDelete = (index) => {
        dispatch({type:"DELETE_TODO_ITEM", index:index });
    }
    
    return (
        <div className="todolist"> 
           <ul>
                {
                    state.todoList.map((item, index) => {
                        return <li> <button onClick={()=> { handleDelete(index); }} > x </button> {item}   </li>
                    })
                }   
            </ul>
        </div>
    )
}

export default TodoList;