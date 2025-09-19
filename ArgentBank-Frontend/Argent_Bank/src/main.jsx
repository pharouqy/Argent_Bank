import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/main.css";
import AppRouter from "./router/Router";
import { Provider } from "react-redux";
import store from "./reducers/index";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </StrictMode>
);
