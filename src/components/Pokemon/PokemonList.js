import React, { useState, useEffect } from 'react';
import axiosInstance from '../../api/axiosConfig';
import './PokemonList.css';

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    axiosInstance.get('/pokemon')
      .then(response => setPokemonList(response.data))
      .catch(error => console.error('Error fetching Pokémon list:', error));
  }, []);

  const toggleList = () => {
    setShowList(!showList);
  };

  return (
    <div className="PokemonList-container">
      <h1 className="PokemonList-header">Pokémon List</h1>
      <button onClick={toggleList}>{showList ? 'Hide List' : 'Show List'}</button>
      {showList && (
        <ul className="PokemonList">
          {pokemonList.map(pokemon => (
            <li key={pokemon.name} className="PokemonList-item">
              <h1 className="Pokemon-name">{pokemon.name}</h1>
              <p className="Pokemon-info">Height: {pokemon.height}</p>
              <p className="Pokemon-info">Weight: {pokemon.weight}</p>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} className="Pokemon-image" />
              <h2>Abilities</h2>
              <ul className="Pokemon-ability">
                {pokemon.abilities.map((ability, index) => (
                  <li key={index} className="Pokemon-info">{ability.ability.name}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PokemonList;
