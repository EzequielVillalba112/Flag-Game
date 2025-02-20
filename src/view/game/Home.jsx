import { Flag } from "../../components/flag/Flag";
import { Nav } from "../../components/nav/Nav";
import { OptionsFlag } from "../../components/options/OptionsFlag";
import "./home.css";

export const Home = () => {
  return (
    <section className="home">
      <Nav/>
      <Flag />
      <OptionsFlag/>
    </section>
  );
};
