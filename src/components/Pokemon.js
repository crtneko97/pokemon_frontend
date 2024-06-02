// src/components/Pokemon.js
import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosConfig';


function Pokemon({ name }) {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        axiosInstance.get(`/pokemon/${name}`)
            .then(response => setPokemon(response.data))
            .catch(error => console.error('Error fetching the Pokémon data:', error));
    }, [name]);

    if (!pokemon) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{pokemon.name}</h1>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <h2>Abilities</h2>
            <ul>
                {pokemon.abilities.map((ability, index) => (
                    <li key={index}>{ability.ability.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Pokemon;
