import { createContext, useState } from "react";

const FetchContext = createContext([]);

const FetchContextProvider = ({ children }) => {
  const [pokeData, setPokeData] = useState([]);
  const [pokeTypes, setPokeTypes] = useState([]);

  return (
    <FetchContext.Provider
      value={{ pokeData, setPokeData, pokeTypes, setPokeTypes }}
    >
      {children}
    </FetchContext.Provider>
  );
};

export { FetchContextProvider, FetchContext };
