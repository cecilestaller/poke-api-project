import { createContext, useState } from "react";

const FetchContext = createContext([]);

const FetchContextProvider = ({ children }) => {
  const [pokeData, setPokeData] = useState([]);
  const [pokeTypes, setPokeTypes] = useState([]);
  const [typeValue, setTypeValue] = useState("");
  const [searchItem, setSearchItem] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <FetchContext.Provider
      value={{
        pokeData,
        setPokeData,
        pokeTypes,
        setPokeTypes,
        typeValue,
        setTypeValue,
        searchItem,
        setSearchItem,
        darkMode,
        setDarkMode

      }}
    >
      {children}
    </FetchContext.Provider>
  );
};

export { FetchContextProvider, FetchContext };
