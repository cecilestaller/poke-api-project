import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { FetchContext } from "../../context/Context";
import "./CardItem.scss";

const CardItem = () => {
  const { typeValue, pokeData } = useContext(FetchContext);
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    //  If a typeValue exists and is valid, the data is filtered
    if (typeValue) {
      const filteredData = pokeData?.filter((pokemonObj) =>
        pokemonObj.types.some((typeObj) => typeObj.type.name === typeValue)
      );
      setDisplayData(filteredData);
    } else {
      // If no typeValue exists, all data is displayed
      setDisplayData(pokeData);
    }
  }, [typeValue, pokeData]);

  return (
    <article className="card-items-wrap">
      {displayData?.map((singlePokeObject) => {
        return (
          <article key={singlePokeObject.id}>
            <Link to={`/detail/${singlePokeObject.id}`}>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${singlePokeObject.id}.png`}
                alt={singlePokeObject.name}
              />

              <div className="info-wrap">
                <p>#{singlePokeObject.id.toString().padStart(3, "0")}</p>
                <p>
                  {singlePokeObject.name
                    .charAt(0)
                    .toUpperCase()
                    .concat(singlePokeObject.name.slice(1))}
                </p>
              </div>
            </Link>
          </article>
        );
      })}
    </article>
  );
};

export default CardItem;
