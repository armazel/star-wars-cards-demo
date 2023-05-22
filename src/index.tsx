import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/store";

import App from "./App";


import "./index.scss";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
      <Provider store={store}>
        <BrowserRouter basename="/star-wars-cards-demo">
          <App />
        </BrowserRouter>
      </Provider>,
    
  );
}
