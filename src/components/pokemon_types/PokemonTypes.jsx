import { useContext, useEffect } from "react";
import "./PokemonTypes.scss";
import { FetchContext } from "../../context/Context";
import { Link } from "react-router-dom";

const PokemonTypes = () => {
  const { pokeTypes } = useContext(FetchContext);
  const { typeValue, setTypeValue } = useContext(FetchContext);

  const colors = {
    bug: "bug",
    dragon: "dragon",
    fairy: "fairy",
    fire: "fire",
    ghost: "ghost",
    ground: "ground",
    normal: "normal",
    poison: "poison",
    rock: "rock",
    water: "water",
    dark: "dark",
    electric: "electric",
    fighting: "fighting",
    flying: "flying",
    grass: "grass",
    ice: "ice",
    plant: "plant",
    psychic: "psychic",
    steel: "steel",
  };

  const handleClick = (e) => {
    setTypeValue(e.target.innerText);
  };

  useEffect(() => {}, [typeValue]);

  console.log(typeValue);

  return (
    <section className="pokemon-types-section">
      <h2 className="pokemon-types-headline">Type</h2>
      <article className="pokemon-types-btns-wrapper grid grid--2-cols">
        {pokeTypes?.results?.map((type, index) => {
          if (type.name !== "shadow" && type.name !== "unknown") {
            return (
              <Link
                to="/"
                key={index}
                className={`types ${
                  type.name === colors[type.name] ? colors[type.name] : null
                }`}
                onClick={handleClick}
              >
                {type.name}
              </Link>
            );
          }
        })}
      </article>
    </section>
  );
};

export default PokemonTypes;
