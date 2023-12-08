import { useEffect, useContext, useState } from "react";
import { FetchContext } from "../context/Context";

const PokeFetch = () => {
  const { setPokeData, setPokeTypes } = useContext(FetchContext);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => res.json())
      .then((data) => {
        // Erstellen von Promises für alle Detaildaten-Fetches
        const newArr = data.results?.map((singlePokeObj) =>
          fetch(`${singlePokeObj.url}`).then((res) => res.json())
        );

        // Verwenden von Promise.all, um auf alle Antworten zu warten
        Promise.all(newArr)
          .then((singleData) => {
            // Nachdem alle Daten gefetcht wurden, die Daten im State speichern
            setPokeData(singleData);
          })
          .catch((error) =>
            console.error("Fehler beim Abrufen der Detaildaten: ", error)
          );
      })
      .catch((error) => console.log(error));
  }, [setPokeData]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/type")
      .then((response) => response.json())
      .then((types) => setPokeTypes(types))
      .catch((error) => console.log(error));
  }, []);
};

export default PokeFetch;
