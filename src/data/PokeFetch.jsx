import { useEffect, useContext, useState } from "react";
import { FetchContext } from "../context/Context";

const PokeFetch = () => {
    
    const { pokeData, setPokeData } = useContext(FetchContext);
    // const [pokeData, setPokeData] = useState([])


    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/')
            .then(res => res.json())
            .then(data => {
                let newArr = [];

        data.results?.map((singlePokeObj) => {
          fetch(`${singlePokeObj.url}`)
            .then((res) => res.json())
            .then((singleData) => {
              newArr.push({ ...singleData });
              setPokeData(newArr);
            });
        });
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/type")
      .then((response) => response.json())
      .then((types) => setPokeTypes(types))
      .catch((error) => console.log(error));
  }, []);
};

export default PokeFetch;
