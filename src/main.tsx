import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import App from "./App.tsx";

// 🔹 Global styles
import "@/styles/globals.css";

// 🔹 i18n (must load before rendering App)
import "@/i18n";

// 🔹 Redux store provider (if you use Redux Toolkit)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <App />
  </StrictMode>
);
