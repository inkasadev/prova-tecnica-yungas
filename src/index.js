import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./services/server";
import { AppProvider } from "./context";
import "./theme.css";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
