import { createContext, useState } from "react";

const FetchContext = createContext([]);

const FetchContextProvider = ({ children }) => {
  const [pokeData, setPokeData] = useState([]);
  const [pokeTypes, setPokeTypes] = useState([]);
  const [typeValue, setTypeValue] = useState(null);

  return (
    <FetchContext.Provider
      value={{
        pokeData,
        setPokeData,
        pokeTypes,
        setPokeTypes,
        typeValue,
        setTypeValue,
      }}
    >
      {children}
    </FetchContext.Provider>
  );
};

export { FetchContextProvider, FetchContext };
