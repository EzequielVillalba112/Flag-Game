import { useNavigate } from "react-router";
import "./start.css";
import { VscDebugStart } from "react-icons/vsc";

export const Start = () => {
  const navigate = useNavigate();
  return (
    <section className="start-game">
      <div className="container-start-game">
        <div className="text-start_game">
          <h1>Flag Game</h1>
          <p>Guess the country of the flag</p>
        </div>
        <button className="start-game-button" onClick={() => navigate("/game")}>
          <VscDebugStart size="3rem" />
          Start Game
        </button>
      </div>
    </section>
  );
};
