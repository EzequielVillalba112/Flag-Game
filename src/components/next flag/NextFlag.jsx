import { useContext } from "react";
import "./nextFlag.css";
import { CountrieContext } from "../../context/Countries";

export const NextFlag = () => {
    const {setNextFlag, clear} = useContext(CountrieContext);

    const next = () =>{
        clear();
        setNextFlag(false);
    }
  return (
    <div className="bg-message">
        <div className="data-next_flag">
            <h2>Correct!!!</h2>
            <button className="new_game" onClick={()=>next()}>Next</button>
        </div>
    </div>
  )
}
