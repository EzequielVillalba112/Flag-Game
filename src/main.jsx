import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router";
import { Lose } from "./view/lose/Lose.jsx";
import { CountriesProvider } from "./context/Countries.jsx";

createRoot(document.getElementById("root")).render(
  <Router>
    <CountriesProvider>
      <App />
    </CountriesProvider>
  </Router>
);
