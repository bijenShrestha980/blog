import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { reducers } from "./reducers";
import App from "./App";
import "./index.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

const store = createStore(reducers, {}, compose(applyMiddleware(thunk)));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#445045", // your primary color
    },
    secondary: {
      main: "#9ed5cb", // your secondary color
    },
  },
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
