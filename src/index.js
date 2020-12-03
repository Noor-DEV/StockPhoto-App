import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Context from "./Components/Context";
ReactDOM.render(
  <Context className="ctx">
    <App />
  </Context>,
  document.getElementById("root")
);
