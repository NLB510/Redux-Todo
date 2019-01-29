import React from "react";

import { connect } from "react-redux";
import { toggleTodo, deleteTodo } from "../../actions";

import Todo from "./Todo";

const mapStateToProps = state => {
  return {
    todos: state
  };
};

class TodoList extends React.Component {
  toggleTodoItem = id => {
    this.props.toggleTodo(id);
  };

  deleteTodoItem = (e, id) => {
    e.preventDefault();
    this.props.deleteTodo(id)
  };

  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.todos.map(todo => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              toggleTodoItem={this.toggleTodoItem}
              deleteTodoItem={this.deleteTodoItem}
            />
          );
        })}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  { toggleTodo, deleteTodo }
)(TodoList);
