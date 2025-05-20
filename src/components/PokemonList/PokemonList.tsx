import { useEffect, useState } from "react";
import type { PokemonListResponse } from '@services/pokemonService';

export default function PokemonList() {
  const [pokemonList, setPokemonList] = useState<PokemonListResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
        if (!response.ok) throw new Error('Erreur de réseau');
        const data = await response.json();
        setPokemonList(data);
        setError(null);
      } catch (err: Error | unknown) {
        setError(err instanceof Error ? err.message : 'Erreur inconnue');
        setPokemonList(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Erreur: {error}</div>;
  }

  if (!pokemonList) {
    return <div>Aucun Pokémon trouvé</div>;
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {pokemonList.results.map((pokemon, index) => {
        const id = index + 1;
        return (
          <div
            key={pokemon.name}
            style={{ border: '1px solid #ccc', padding: '10px' }}
          >
            <h3>{pokemon.name}</h3>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
              alt={pokemon.name}
              style={{ width: '100px' }}
            />
          </div>
        );
      })}
    </div>
  );
}