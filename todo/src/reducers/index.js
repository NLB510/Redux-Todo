import { ADD_TODO } from "../actions/index";

const initialState = {
  todos: [
    {
      id: 0,
      value: "Walk the dog.",
      completed: false
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    default:
      return state;
  }
};


export default reducer
