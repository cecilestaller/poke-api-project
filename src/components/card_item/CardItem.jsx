import { Link } from "react-router-dom";
import { useContext } from "react";
import { FetchContext } from "../../context/Context";
import './CardItem.scss'

const CardItem = () => {

    const { pokeData, setPokeData } = useContext(FetchContext);
    console.log('home log: ', pokeData);

    return (  
        <article className="card-items-wrap">
            {pokeData?.map((singlePokeObject) => {
                return (
                    
                    <article key={singlePokeObject.id}>
                        <Link>

                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${singlePokeObject.id}.png`} alt={singlePokeObject.name} />
                        <div>
                            <p>#{singlePokeObject.id.toString().padStart(3, '0')}</p>
                            <p>{singlePokeObject.name}</p>
                        </div>

                        </Link>
                    </article>
                        
                
                )
            })}
            
        </article>
    );
}
 
export default CardItem;