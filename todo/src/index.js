import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";

import { createStore } from "redux";

function tempReducer() {
  return {
    value: "Walk the dog.",
    completed: false
  };
}

const store = createStore(tempReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
