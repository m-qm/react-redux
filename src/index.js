import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import Application from "./Application";
import { store } from "./store";

import "./index.scss";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Application />
    </Router>
  </Provider>,
  document.getElementById("root")
);
