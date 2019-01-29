import React from "react";

import { connect } from "react-redux";

import { addTodo } from "../../actions/index";

import Todo from "./Todo"

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const TodoList = props => {
  console.log(props);
  return (
    <div>
      {props.todos.map(todo => {
        return <Todo todo={todo} />
      })}
    </div>
  );
};

export default connect(
  mapStateToProps,
  {addTodo}
)(TodoList);
