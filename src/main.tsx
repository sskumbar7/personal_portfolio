import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// Monkey-patch createPortal to debug Error #306
const originalCreatePortal = ReactDOM.createPortal;
// @ts-ignore
ReactDOM.createPortal = (children, container, key) => {
  if (!container) {
    console.error("❌ ReactDOM.createPortal called with null/undefined container!");
    console.error("Children:", children);
    // You can't easily print stack here in React 18 strict mode sometimes, but let's try
    try { throw new Error("Portal Trace"); } catch (e) { console.error(e); }
  }
  return originalCreatePortal(children, container, key);
};




ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
