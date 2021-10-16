import React from 'react';
import { Row } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PokemonsByType = () => {
    const Pokemon = useSelector(state => state.Pokemon);
    const {type} = useParams();

    return (
        <Row>
            {
                Pokemon.filter(pokemon => {if(type === 'All') {return pokemon;} return pokemon.types.includes(type);}).map(pokemon =>
                    <div className='pokemon'>
                        <div className='img-wrapper'>
                            <Link to={`/${pokemon.name}`}><img src={pokemon.image} /></Link>
                        </div>
                        <p>{ pokemon.ntnlnum }</p>
                        <h2>{ pokemon.name }</h2>
                    </div>
                    )
            }
        </Row>
    );
};

export default PokemonsByType;