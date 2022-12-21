import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import rootReducer from "./modules";
import { Provider } from "react-redux";
// import loggerMiddleware from "./lib/loggerMiddleware";
import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

// logger
const logger = createLogger();

// store - redux toolkit
const store = configureStore({
  reducer: rootReducer,
  middleware: [logger],
});
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
