import { QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { client } from "./config/reaquest_clinets.js";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={client}>
    <BrowserRouter>
      <App />
      <ToastContainer/>
    </BrowserRouter>
  </QueryClientProvider>,
);
