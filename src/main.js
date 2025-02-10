import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from "react";
import "./index.css";
import "./i18n";
import { RouterProvider } from "react-router-dom";
import router from "@/routes/AppRoutes";
import { createRoot } from "react-dom/client";
createRoot(document.getElementById("root")).render(_jsx(StrictMode, { children: _jsx(RouterProvider, { router: router }) }));
