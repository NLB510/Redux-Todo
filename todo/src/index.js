import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";

import { createStore } from "redux";
import rootReducer from "./reducers"

// function tempReducer() {
//   return {
//     value: "Walk the dog.",
//     completed: false
//   };
// }

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
