import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ToggleContextPage from "./components/CONTEXT/ToggleContextPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <>
    <ToggleContextPage>
      <App />
    </ToggleContextPage>
  </>
  // </React.StrictMode>,
);
