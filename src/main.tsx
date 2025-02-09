import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./toolkit/store/Store";
import App from "./router/App";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
