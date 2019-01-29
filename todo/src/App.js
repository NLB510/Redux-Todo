import React, { Component } from 'react';
import './App.css';

import TodoList from "./components/todocontainer/TodoList"
import TodoForm from "./components/todoform/TodoForm"

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>I'm the App</h1>
       <TodoForm />
       <TodoList />
      </div>
    );
  }
}

export default App;
