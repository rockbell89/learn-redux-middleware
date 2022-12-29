import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import rootReducer, { rootSaga } from "./modules";
import { Provider } from "react-redux";
// import loggerMiddleware from "./lib/loggerMiddleware";
import {
  configureStore,
  applyMiddleware,
  legacy_createStore as createStore,
} from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";
import createSagaMiddleware from "@redux-saga/core";
import { composeWithDevTools } from "redux-devtools-extension";

// logger
const logger = createLogger();
const sagaMiddleWare = createSagaMiddleware();

// store - redux toolkit
const store = configureStore({
  reducer: rootReducer,
  middleware: [
    // logger
    ReduxThunk,
    sagaMiddleWare,
  ],
});

// store - legacy
// const store = createStore(
//   rootReducer,
//   composeWithDevTools(
//     applyMiddleware(
//       logger,
//       ReduxThunk
//       sagaMiddleWare
//     )
//   )
// );

sagaMiddleWare.run(rootSaga);

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
