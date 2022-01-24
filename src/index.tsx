import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/App";
import "./assets/styles/global.scss";
import { Provider } from "react-redux";
import store from "./redux/store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
