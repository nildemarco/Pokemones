import React, { useState, useEffect } from 'react';
import './App.css';
import CardPokemon from './components/CardPokemon';
import axios from 'axios'

const App = () => {

   const [pokemon, setPokemon] = useState([''])
   const [pokemonSelect, setPokemonSelect] = useState('charmander')

  useEffect(() =>{ 
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonSelect}`)
  .then(res => setPokemon(res.data))}
  ,[pokemonSelect]);

  const handleClick = (e) => {
    setPokemonSelect(e.target.id)
  }

  console.log(pokemon)
  return (
    <div className="container">
      <div className='container-cards'>
     <h1>Pokemones</h1>
     { pokemon &&
     <CardPokemon pokemon={pokemon}/>
     }
     <div className='container-button'> 
       <button id="charmander" onClick={handleClick}>Charmander</button>
       <button id="squirtle" onClick={handleClick}>Squirtle</button>
       <button id="bulbasaur" onClick={handleClick}>Bulbasaur</button>
       <button id="pikachu" onClick={handleClick}>Pikachu</button>
     </div>
     </div>
    </div>

  );
}

export default App;
