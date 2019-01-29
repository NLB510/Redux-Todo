import React from "react";

import { connect } from "react-redux";



import Todo from "./Todo"

const mapStateToProps = state => {
  return {
    todos: state
  };
};

const TodoList = props => {
  console.log(props);
  return (
    <div>
      {props.todos.map(todo => {
        return <Todo key={todo.id} todo={todo} />
      })}
    </div>
  );
};

export default connect(
  mapStateToProps,
  {}
)(TodoList);
