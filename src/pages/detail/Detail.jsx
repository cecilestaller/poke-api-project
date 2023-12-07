import { useContext, useEffect, useState } from "react";
import { FetchContext } from "../../context/Context";
import { useParams } from "react-router-dom";



const Detail = () => {
    
    const pokeArr = useContext(FetchContext)
    console.log(pokeArr);
    const param = useParams()
    const id = param.id
    
    const filteredPokemon = pokeArr.pokeData.filter((pokeInfo)=>{
        return pokeInfo.id.toString()===id.toString()
    })
    
    console.log(filteredPokemon);
    return (  
        <main>
            {filteredPokemon.map((pokemon)=>{
                const pokeName = pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)
                if(pokemon.id<10){
                    return(
                        <section>
                    <article>
                        <h1>000{pokemon.id} {pokeName}</h1>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt="" />
                        <h2>Types</h2>
                        <div>
                            {pokemon.types.map((pokeType)=>{
                                return <button className={pokeType.type.name}>{pokeType.type.name}</button>
                            })}
                            
                        </div>
                        <div>
                            <h2>Height:</h2>
                            <p>{pokemon.height/10} m</p>
                            <h2>Weight:</h2>
                            <p>{pokemon.weight/10} kg</p>
                        </div>
                        
                        <a href={`https://bulbapedia.bulbagarden.net/wiki/${pokemon.name.replace('-', "_")}_(Pok%C3%A9mon)`}>Visit {pokeName}'s Wiki</a>
                    </article>
                </section>
                    )
                }

                if(pokemon.id<100){
                    return(
                        <section>
                    <article>
                        <h1>00{pokemon.id} {pokeName}</h1>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt="" />
                        <h2>Types</h2>
                        <div>
                            {pokemon.types.map((pokeType)=>{
                                return <button className={pokeType.type.name}>{pokeType.type.name}</button>
                            })}
                            
                        </div>
                        <div>
                            <h2>Height:</h2>
                            <p>{pokemon.height/10} m</p>
                            <h2>Weight:</h2>
                            <p>{pokemon.weight/10} kg</p>
                        </div>
                        
                        <a href={`https://bulbapedia.bulbagarden.net/wiki/${pokemon.name.replace('-', "_")}_(Pok%C3%A9mon)`}>Visit {pokeName}'s Wiki</a>
                    </article>
                </section>
                    )
                }

                if(pokemon.id<1000){
                    return(
                        <section>
                    <article>
                        <h1>0{pokemon.id} {pokeName}</h1>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt="" />
                        <h2>Types</h2>
                        <div>
                            {pokemon.types.map((pokeType)=>{
                                return <button className={pokeType.type.name}>{pokeType.type.name}</button>
                            })}
                            
                        </div>
                        <div>
                            <h2>Height:</h2>
                            <p>{pokemon.height/10} m</p>
                            <h2>Weight:</h2>
                            <p>{pokemon.weight/10} kg</p>
                        </div>
                        
                        <a href={`https://bulbapedia.bulbagarden.net/wiki/${pokemon.name.replace('-', "_")}_(Pok%C3%A9mon)`}>Visit {pokeName}'s Wiki</a>
                    </article>
                </section>
                    )
                }

                return(
                    <section>
                <article>
                    <h1>{pokemon.id} {pokeName}</h1>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt="" />
                    <h2>Types</h2>
                    <div>
                        {pokemon.types.map((pokeType)=>{
                            return <button className={pokeType.type.name}>{pokeType.type.name}</button>
                        })}
                        
                    </div>
                    <div>
                        <h2>Height:</h2>
                        <p>{pokemon.height/10} m</p>
                        <h2>Weight:</h2>
                        <p>{pokemon.weight/10} kg</p>
                    </div>
                    
                    <a href={`https://bulbapedia.bulbagarden.net/wiki/${pokemon.name.replace('-', "_")}_(Pok%C3%A9mon)`}>Visit {pokeName}'s Wiki</a>
                </article>
            </section>
                )
            })}
            
        </main>
    );
}

export default Detail;