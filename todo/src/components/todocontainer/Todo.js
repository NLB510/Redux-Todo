import React from "react";

import styled from "styled-components";

const Todo = props => {
  console.log(props);
  return (
    <TodoContainer>
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={() => props.toggleTodoItem(props.todo.id)}
      />
      <h1>{props.todo.value}</h1>
    </TodoContainer>
  );
};

/* 
==== Component Styles ====
*/

const TodoContainer = styled.div`
  width: 15%;
  margin: 2% auto;
  padding: 10px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Todo;
