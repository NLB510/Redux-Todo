import React from "react";

import { connect } from "react-redux";
import { toggleTodo } from "../../actions";

import Todo from "./Todo";

const mapStateToProps = state => {
  return {
    todos: state
  };
};

class TodoList extends React.Component {

  toggleTodoItem = (id) => {
    
    this.props.toggleTodo(id);
  };

  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.todos.map(todo => {
          return (
            <Todo key={todo.id} todo={todo} toggleTodoItem={this.toggleTodoItem} />
          );
        })}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  { toggleTodo }
)(TodoList);
