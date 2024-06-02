// PokemonList.js

import React, { useState, useEffect } from 'react';
import axiosInstance from '../../api/axiosConfig';
import './PokemonList.css'; // Import the CSS file
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
            <li key={pokemon.id} className="PokemonList-item">
              <span className="PokemonList-name">{pokemon.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PokemonList;
