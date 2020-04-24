import React from 'react';

const CardPokemon = ({pokemon}) => {
    return (
     <div className="card">
         <h2>{pokemon.name}</h2>
         {pokemon.sprites &&
         <img src={pokemon.sprites.front_default}/>
        }
        <p>El pokemon se llama {pokemon.name}, mide {(pokemon.height*30).toFixed()} cm y pesa {(pokemon.weight/2.2).toFixed()} kg </p>
     </div>
    );
}
export default CardPokemon;