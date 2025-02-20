import { useNavigate } from "react-router";
import "./lose.css";
import React, { useContext, useEffect } from "react";
import { CountrieContext } from "../../context/Countries";

export const Lose = () => {
  const { randomCountry, setError, clear } = useContext(CountrieContext);
  const navigate = useNavigate();
  useEffect(() => {
    // Evitar el retroceso del navegador
    const handlePopState = (e) => {
      window.history.pushState(null, "", window.location.href);
    };

    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", handlePopState);

    // Limpiar el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const newGame = () => {
    randomCountry();
    setError(false);
    clear();
    navigate("/game");
  };

  return (
    <section className="lose">
      <div className="message-lose">
        <h1>Game Over</h1>
        <p>You lost! 😢</p>
      </div>

      <button className="start-new_game" onClick={newGame}>
        New Game
      </button>
    </section>
  );
};
