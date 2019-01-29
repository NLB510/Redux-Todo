export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = 'TOGGLE_TODO';


let nextTodoId = Date.now();

export const addTodo = text => {
  return {
    type: ADD_TODO,
    id: nextTodoId,
    text: text
  };
};


export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    payload: id,
  }
}
