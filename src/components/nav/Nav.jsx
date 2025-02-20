import { useContext } from "react";
import "./nav.css";
import { FaHeart } from "react-icons/fa";
import { FaHeartBroken } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";
import { CountrieContext } from "../../context/Countries";

export const Nav = () => {
  const {live} = useContext(CountrieContext)

  return (
    <nav className="nav-conutrie">
      <div className="logo">
        <h1>COUNTRIES</h1>
      </div>

      <div className="lives">
        <h2>{live}</h2>
        {live === 5 ? (
          <FaHeart size="2rem" />
        ) : live >= 1 ? (
          <FaHeartbeat size="2rem" />
        ) : (
          live === 0 && <FaHeartBroken size="2rem"/>
        )}
      </div>
    </nav>
  );
};
