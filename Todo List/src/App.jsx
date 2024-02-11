import React, { useReducer, useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import WelcomeMessage from './components/WelcomeMessage';
import TodoContextProvider from './store/TodoListStore';
import './App.css';




function App() {

  // const [todoList, setTodoList] = useState([]);

  return (

    /*
     * don't put those values in context have too many 
     * component dependent on it, or that changes very frequently
    */
    <div className="container">
        <h1>Todo App</h1>
        <TodoContextProvider>
          <TodoInput/>
          <WelcomeMessage />
          <TodoList />
        </TodoContextProvider>
    </div>
  )
}

export default App;