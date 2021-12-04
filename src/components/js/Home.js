import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../css/Home.css'

const Home = () => {
    const Pokemon = useSelector(state => state.Pokemon);

    return (
        <div className='pokemon-display'>
            {
            Pokemon.map( pokemon => 
              <div className='pokemon flex-colwrap-center-center'>
                <div className='img-container flex-colwrap-center-center'> 
                    <Link to={`/${pokemon.name}`}><img src={pokemon.image}/></Link>
                </div>
                <small>{ pokemon.ntnlnum }</small>
                <h2>{ pokemon.name }</h2>
            </div>  
              )
          }
        </div>
    );
};

export default Home;