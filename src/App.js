import React, { useState } from 'react';
import './App.css';
import Pokemon from './components/Pokemon/Pokemon';
import PokemonList from './components/Pokemon/PokemonList';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemonName, setPokemonName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setPokemonName(searchTerm);
  };

  return (
    <>
    <div className="App">
      <header className="App-header">
        <h1>Pokémon Search</h1>
      </header>
      <div className="App-content">
        <div className="Pokemon-search">
          <form onSubmit={handleSubmit} className="Pokemon-search-form">
            <input 
              type="text" 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
              placeholder="Enter Pokémon name" 
              className="Pokemon-search-input"
            />
            <button type="submit" className="Pokemon-search-button">Search</button>
          </form>
          {pokemonName && <Pokemon name={pokemonName} />}
        </div>
      </div>
    </div>
      <PokemonList />
    </>
  );
}

export default App;
