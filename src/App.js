import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import AppContextProvider from './contexts/AppContext';
import TodoListControls from './components/TodoListControls';


function App() {
  
  return (
    <div className="App">
      <AppContextProvider>
        <header className="App-header"> 
          <h4> Todo List </h4> 
        </header>
        <section className="App-body layout">
          <TodoListControls></TodoListControls>
          <TodoList></TodoList>
        </section>
      </AppContextProvider>
    </div>      
  );
}

export default App;
