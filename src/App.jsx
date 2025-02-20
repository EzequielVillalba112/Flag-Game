import "./App.css";
import { Home } from "./view/game/Home";
import { Route, Routes } from "react-router";
import { Lose } from "./view/lose/Lose";
import { Start } from "./view/start/Start";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/game" element={<Home />} />
      <Route path="/lose" element={<Lose />} />
    </Routes>
  );
}

export default App;
