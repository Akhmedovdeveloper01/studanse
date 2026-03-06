import { QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { client } from "./config/reaquest_clinets.js";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./context/UserContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
    <QueryClientProvider client={client}>
        <UserProvider>
            <App />
            <ToastContainer />
        </UserProvider>
    </QueryClientProvider>
);
