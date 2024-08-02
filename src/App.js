import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  // Inicialmente, pokemonList es un array vacío
  const [pokemonList, setPokemonList] = useState([]);

  const fetchPokemon = async () => {
    try {
      // Hacemos una solicitud GET a la API de Pokémon para obtener los primeros 807 Pokémon
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=807');
      // Actualizamos el estado pokemonList con los resultados de la solicitud
      setPokemonList(response.data.results);
    } catch (error) {
      console.error('Error fetching the Pokémon data:', error);
    }
  };

  return (
    <div className="App">
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
      <ul>
        {pokemonList.map((pokemon, index) => (
          //Por cada Pokémon en pokemonList, renderizamos un elemento de lista (li) con su nombre
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
