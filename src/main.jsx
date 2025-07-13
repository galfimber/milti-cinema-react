import { createRoot } from "react-dom/client";
import { AppProvider } from "./context/AppContext.jsx";
import "./Styles/main.scss";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <AppProvider>
    <App />
  </AppProvider>
);
