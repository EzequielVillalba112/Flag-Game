import { useContext } from "react";
import "./flag.css";
import { CountrieContext } from "../../context/Countries";

export const Flag = () => {
  const { countrieKeySelect } = useContext(CountrieContext);
  return (
    <div className="img-flag">
      <img
        src={`https://flagcdn.com/w2560/${countrieKeySelect}.png`}
        alt="flag"
      />
    </div>
  );
};
