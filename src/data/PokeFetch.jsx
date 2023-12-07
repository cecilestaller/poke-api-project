import { useEffect, useContext } from "react";
import { FetchContext } from "../context/Context";

const PokeFetch = () => {
  const { pokeData, setPokeData } = useContext(FetchContext);
  const { pokeTypes, setPokeTypes } = useContext(FetchContext);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((data) => {
        let newArr = [];
                data.results?.map((singlePokeObj) => {
                    fetch(`${singlePokeObj.url}`)
                        .then(res => res.json())
                        .then(singleData => {
                            newArr.push({...singleData})
                            setPokeData(newArr)
                        })
                })
            })
            .catch(error => console.log(error))
    }, [])
    // console.log('final poke log: ', pokeData);
}
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/type")
      .then((response) => response.json())
      .then((types) => setPokeTypes(types))
      .catch((error) => console.log(error));
  }, []);
};

export default PokeFetch;
