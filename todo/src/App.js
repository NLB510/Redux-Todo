import React, { Component } from 'react';
import './App.css';

import TodoList from "./components/todocontainer/TodoList"

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>I'm the App</h1>
       <TodoList />
      </div>
    );
  }
}

export default App;
