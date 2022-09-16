import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./componentes/App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";
import { Provider } from "react-redux";
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}  >
    <App />
  </Provider>
  // <React.StrictMode>
  // </React.StrictMode>
);
