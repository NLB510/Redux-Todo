import React from "react";

import { addTodo } from "../../actions/index";

import { connect } from "react-redux";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  submitTodo = e => {
    e.preventDefault();
    if (this.state.inputText === "") {
      alert("Please input a todo");
    }
    console.log('submit fired')
    console.log(this.state.inputText)
    this.props.addTodo(this.state.inputText);

    this.setState({
      inputText: ''
    })
  };

  render() {
    return (
      <form onSubmit={this.submitTodo}>
        <input
          type="text"
          name="inputText"
          value={this.state.inputText}
          placeholder="Enter A Todo"
          onChange={this.handleChange}
        />
        <button type="submit">Add Todo</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(
  mapStateToProps,
  { addTodo }
)(TodoForm);
