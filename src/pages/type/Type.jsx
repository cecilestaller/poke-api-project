import { NavLink } from "react-router-dom";
import PokeLogo from "../../components/svg/PokeLogo";
import CrossCloseIcon from "../../components/svg/CrossCloseIcon";
import PokemonTypes from "../../components/pokemon_types/PokemonTypes";

const Type = () => {
  return (
    <main className="main-type container">
      <article className="heading-wrapper">
        <NavLink className="logo">
          <PokeLogo />
        </NavLink>
        <NavLink className="close-btn">
          <CrossCloseIcon />
        </NavLink>
      </article>
      <PokemonTypes />
    </main>
  );
};

export default Type;
