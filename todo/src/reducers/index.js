import { ADD_TODO, TOGGLE_TODO } from "../actions/index";

const initialState = [
  {
    id: 0,
    value: "Walk the dog.",
    completed: false
  },
  {
    id: 1,
    value: "Take out the trash",
    completed: true
  }
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log("action", action);
      return [
        ...state,
        {
          id: action.id,
          value: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      console.log("action", action);

      //maps over todos and changes completed status to matching id todos
      const completedTodos = state.map(todo => {
        console.log(todo);
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      });

      return completedTodos;

    default:
      return state;
  }
};

export default reducer;
