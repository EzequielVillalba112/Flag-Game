import { useContext } from "react";
import { Flag } from "../flag/Flag";
import { CountrieContext } from "../../context/Countries";
import "./message.css";
import { useNavigate } from "react-router";

export const Message = ({ flagCorrect }) => {
  const {
    countrieNameSelect,
    countrieKeySelect,
    randomCountry,
    setError,
    clear,
  } = useContext(CountrieContext);

  const navigate = useNavigate();

  const newGame = () => {
    randomCountry();
    setError(false);
    clear();
    navigate("/game");
  };

  return (
    <div className="bg-message">
      <div className="data-message">
        <div className="img-flag_mess">
          <img
            src={`https://flagcdn.com/w320/${countrieKeySelect}.png`}
            alt="flag"
          />
        </div>
        <h2>Oh no! You failed</h2>
        <p>The correct name is: {countrieNameSelect}</p>

        <button className="new_game" onClick={newGame}>
          Replay
        </button>
      </div>
    </div>
  );
};
