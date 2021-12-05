import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../css/Home.css';

const PokemonsByType = () => {
    const Pokemon = useSelector(state => state.Pokemon);
    const {type} = useParams();

    return (
        <div className='pokemon-display'>
            {
                Pokemon.filter(pokemon => {if(type === 'All') {return pokemon;} return pokemon.types.includes(type);}).map(pokemon =>
                    <div className='pokemon flex-colwrap-center-center'>
                        <div className='img-container flex-colwrap-center-center'>
                            <Link to={`/${pokemon.name}`}><img src={pokemon.image} alt={`/${pokemon.name}`} /></Link>
                        </div>
                        <small>{ pokemon.ntnlnum }</small>
                        <h2>{ pokemon.name }</h2>
                    </div>
                    )
            }
        </div>
    );
};

export default PokemonsByType;