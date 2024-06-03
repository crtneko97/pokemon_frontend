import React, { useState, useEffect } from 'react';
import axiosInstance from '../../api/axiosConfig';
import './Pokemon.css';

function Pokemon({ name }) {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        axiosInstance.get(`/pokemon/${name}`)
            .then(response => setPokemon(response.data))
            .catch(error => console.error('Error fetching the Pokémon data:', error));
    }, [name]);

    if (!pokemon) {
        return <div className="Pokemon-container">Loading...</div>;
    }

    return (
        <div className="Pokemon-container">
            <h1 className="Pokemon-name">{pokemon.name}</h1>
            <p className="Pokemon-info">Height: {pokemon.height}</p>
            <p className="Pokemon-info">Weight: {pokemon.weight}</p>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} className="Pokemon-image" />
            <h2>Abilities</h2>
            <ul className="Pokemon-ability">
                {pokemon.abilities.map((ability, index) => (
                    <li key={index} className="Pokemon-i    nfo">{ability.ability.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Pokemon;
