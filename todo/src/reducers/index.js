import { ADD_TODO } from "../actions/index";

const initialState = [
  {
    id: 0,
    value: "Walk the dog.",
    completed: false
  },
  {
    id: 1,
    value: "Take out the trash",
    completed: false
  }
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          value: action.text,
          completed: false
        }
      ];
    default:
      return state;
  }
};

export default reducer;
