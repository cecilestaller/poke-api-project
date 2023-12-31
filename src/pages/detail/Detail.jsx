import { useContext, useEffect, useState } from "react";
import { FetchContext } from "../../context/Context";
import { Link, useParams } from "react-router-dom";
import './Detail.css'
import BackMenuIcon from "../../components/svg/BackMenuIcon";



const Detail = () => {
    
    const pokeArr = useContext(FetchContext)
    
    const param = useParams()
    const id = param.id
    
    const filteredPokemon = pokeArr.pokeData.filter((pokeInfo)=>{
        return pokeInfo.id.toString()===id.toString()
    })
    
    
    return (  
        <>
        

        <main className="container">

            {filteredPokemon.map((pokemon)=>{
                const pokeName = pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)
                if(pokemon.id<10){
                    return(
                        <section className="detailSec" key={pokemon.id}>
                    <article>
                        <div className="btn-wrapper">
                            <Link to='/'>
                                <BackMenuIcon />
                            </Link>
                            <h1>#00{pokemon.id} {pokeName}</h1>
                        </div>
                        <div className="detCon">

                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt="" />
                        <h2>Types</h2>
                        <div className="types">
                            {pokemon.types.map((pokeType, index)=>{
                                return <button className={pokeType.type.name} key={index}>{pokeType.type.name}</button>
                            })}
                            
                        </div>
                        </div>
                        
                        <div>
                            <article>
                                <h2>Height:</h2>
                                <p>{pokemon.height/10} m</p>
                            </article>
                            <article>
                                <h2>Weight:</h2>
                                <p>{pokemon.weight/10} kg</p>
                            </article>
                        </div>
                        
                        <a href={`https://bulbapedia.bulbagarden.net/wiki/${pokemon.name.replace('-', "_")}_(Pok%C3%A9mon)`}>Visit {pokeName}'s Wiki</a>
                    </article>
                </section>
                    )
                }

                if(pokemon.id<100){
                    return(
                        <section className="detailSec">
                    <article>
                    <div className="btn-wrapper">
                            <Link to='/'>
                                <BackMenuIcon />
                            </Link>
                            <h1>#0{pokemon.id} {pokeName}</h1>
                        </div>
                        
                        <div className="detCon">
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt="" />
                        <h2>Types</h2>
                        <div className="types">
                            {pokemon.types.map((pokeType,index)=>{
                                return <button className={pokeType.type.name} key={index}>{pokeType.type.name}</button>
                            })}
                            
                        </div>
                        </div>
                        <div>
                            <article>
                                <h2>Height:</h2>
                                <p>{pokemon.height/10} m</p>
                            </article>
                            <article>
                                <h2>Weight:</h2>
                                <p>{pokemon.weight/10} kg</p>
                            </article>
                        </div>
                        
                        <a href={`https://bulbapedia.bulbagarden.net/wiki/${pokemon.name.replace('-', "_")}_(Pok%C3%A9mon)`}>Visit {pokeName}'s Wiki</a>
                    </article>
                </section>
                    )
                }

                if(pokemon.id<1000){
                    return(
                        <section className="detailSec">
                    <article>
                    <div className="btn-wrapper">
                            <Link to='/'>
                                <BackMenuIcon />
                            </Link>
                            <h1>#{pokemon.id} {pokeName}</h1>
                        </div>
                        
                        <div className="detCon">
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt="" />
                        <h2>Types</h2>
                        <div className="types">
                            {pokemon.types.map((pokeType,index)=>{
                                return <button className={pokeType.type.name} key={index}>{pokeType.type.name}</button>
                            })}
                            
                        </div>
                        </div>
                        <div>
                            <article>
                                <h2>Height:</h2>
                                <p>{pokemon.height/10} m</p>
                            </article>
                            <article>
                                <h2>Weight:</h2>
                                <p>{pokemon.weight/10} kg</p>
                            </article>
                        </div>
                        
                        <a href={`https://bulbapedia.bulbagarden.net/wiki/${pokemon.name.replace('-', "_")}_(Pok%C3%A9mon)`}>Visit {pokeName}'s Wiki</a>
                    </article>
                </section>
                    )
                }

                return(
                    <section className="detailSec">
                <article>
                    <h1>{pokemon.id} {pokeName}</h1>
                    <div className="detCon">
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt="" />
                    <h2>Types</h2>
                    <div className="types">
                        {pokemon.types.map((pokeType,index)=>{
                            return <button className={pokeType.type.name} key={index}>{pokeType.type.name}</button>
                        })}
                        
                    </div>
                    </div>
                    <div>
                            <article>
                                <h2>Height:</h2>
                                <p>{pokemon.height/10} m</p>
                            </article>
                            <article>
                                <h2>Weight:</h2>
                                <p>{pokemon.weight/10} kg</p>
                            </article>
                        </div>
                    
                    <a href={`https://bulbapedia.bulbagarden.net/wiki/${pokemon.name.replace('-', "_")}_(Pok%C3%A9mon)`}>Visit {pokeName}'s Wiki</a>
                </article>
            </section>
                )
            })}
            
        </main>
        </>
    );
}

export default Detail;