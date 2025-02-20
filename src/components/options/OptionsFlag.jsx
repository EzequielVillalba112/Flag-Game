import { useContext } from "react";
import { CountrieContext } from "../../context/Countries";
import "./optionsFlag.css";
import { Message } from "../message/Message";
import { NextFlag } from "../next flag/NextFlag";

export const OptionsFlag = () => {
  const { optionsFlag, validFlag, error, nextFlag } =
    useContext(CountrieContext);
    
  return (
    <>
      <div className="options-flag">
        {optionsFlag.map((option, index) => (
          <button
            key={index}
            onClick={() => validFlag(option)}
            className="button-option"
          >
            {option}
          </button>
        ))}
      </div>
      {nextFlag === true && <NextFlag />}
      {error === true && <Message />}
    </>
  );
};
