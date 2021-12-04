import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import '../css/PokemonsByName.css';

const PokemonsByName = () => {
    const Pokemon = useSelector(state => state.Pokemon)
    const { pokemonname } = useParams();

    let pokemonData = Pokemon.filter( indPokemon => indPokemon.name === pokemonname );

    return (
        <div className="pokemon-container">
            <div className='img-container'> 
                <img src={ pokemonData[0].image } alt={pokemonData[0].name} />
            </div>
            <div className="pokemon-data-container">
                <h3>{ pokemonData[0].name }</h3>
                <p>{ pokemonData[0].description }</p>
                {
                    pokemonData[0].types.map( type => <Link to={`/types/${type}`}><Button className='filter-btn'>{type}</Button></Link>)
                }
            </div>
        </div>
    );
};

export default PokemonsByName;