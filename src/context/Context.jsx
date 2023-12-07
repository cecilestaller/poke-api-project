import { createContext, useState } from "react";

const FetchContext = createContext([]);


const FetchContextProvider = ({children}) => {

    const [pokeData, setPokeData] = useState([]);

    return (  
        <FetchContext.Provider value={{pokeData, setPokeData}}>

            {children}

        </FetchContext.Provider>
    );
}

export {FetchContextProvider, FetchContext};


