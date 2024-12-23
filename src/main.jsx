import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import router from "./router/router.jsx";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import AuthProvider from "./context/AuthContext/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
