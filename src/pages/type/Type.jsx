import { NavLink, Link } from "react-router-dom";
import PokeLogo from "../../components/svg/PokeLogo";
import CrossCloseIcon from "../../components/svg/CrossCloseIcon";
import { useContext } from "react";
import { FetchContext } from "../../context/Context";

const Type = () => {
  const { pokeData, pokeTypes } = useContext(FetchContext);
  //   console.log(pokeData);
  console.log(pokeTypes.results);
  return (
    <main className="container">
      <article>
        <NavLink>
          <PokeLogo />
        </NavLink>
        <NavLink>
          <CrossCloseIcon />
        </NavLink>
      </article>
      <article>
        <h2>Type</h2>
        <section>
          {pokeTypes?.results.map((type) => (
            <Link>{type.name}</Link>
          ))}
        </section>
      </article>
    </main>
  );
};

export default Type;
