import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@appwrite.io/pink-icons";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import GlobalProvider from "./hooks/GlobalProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalProvider>
        <App />
        <ToastContainer />
      </GlobalProvider>
    </BrowserRouter>
  </StrictMode>
);
