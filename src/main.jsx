import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@material-tailwind/react";
import { store } from "./utils/store.js";
import { Provider } from "react-redux";

import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);
