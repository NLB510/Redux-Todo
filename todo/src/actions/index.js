export const ADD_TODO = "ADD_TODO";

let nextTodoId = 2;

export const addTodo = text => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text: text
  };
};
