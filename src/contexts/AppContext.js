import React, { createContext, useReducer } from 'react';
import { AppReducer } from '../reducers/AppReducer';

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const initialState = {
        todoList:['Test',
                'Go to the market', 
                'Go to the movies']
    }
    
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider value={{state, dispatch}}>
            { props.children }
        </AppContext.Provider>
    )
}

export default AppContextProvider;