// src/App.js
import React, { useState } from 'react';
import './App.css';
import Pokemon from './components/Pokemon';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemonName, setPokemonName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setPokemonName(searchTerm);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokémon Search</h1>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
            placeholder="Enter Pokémon name" 
          />
          <button type="submit">Search</button>
        </form>
        {pokemonName && <Pokemon name={pokemonName} />}
      </header>
    </div>
  );
}

export default App;
