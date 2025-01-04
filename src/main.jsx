import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import { AppProvider } from "@toolpad/core/AppProvider";
import App from "./App.jsx";
import Mokeup from "./Mokeup.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <App />
      {/* <Mokeup /> */}
    </AppProvider>
  </StrictMode>
);
