import React from 'react';
import PokemonsByType from './components/js/PokemonsByType';
import PokemonsByName from './components/js/PokemonsByName';
import Home from './components/js/Home';
import { Link, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import './App.css';
import { GiHamburgerMenu } from "react-icons/gi";

const App = () => {

  const PokemonTypes = useSelector(state => state.PokemonTypes);
  const Pokemon = useSelector(state => state.Pokemon);

  return (

    <div className='main-wrapper'>
    <div className='wrapper'>
      <div className='logo-area'>
        <Link to='/'><h2>Pokedex</h2></Link>
      </div>
      <div className='menu-area'>
        <Button className='menu-btn'><GiHamburgerMenu /></Button>
        <div className='menu'>
          {
             PokemonTypes.map( pokemonType => <Link to={`/types/${pokemonType.type}`}>{ pokemonType.type }</Link>)
          }
        </div>  
      </div>    
    </div>   
    <div>
      <Switch>      
            <Route exact path='/'> 
              <Home Pokemon={Pokemon} />
            </Route>
            <Route path="/types/:type">
              <PokemonsByType Pokemon={Pokemon} />
            </Route>

            <Route path="/:pokemonname">
              <PokemonsByName Pokemon={Pokemon} />
            </Route>
        </Switch>
      </div>
   </div> 
    
  )
};

export default App;