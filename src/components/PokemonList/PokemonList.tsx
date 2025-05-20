import { useQuery } from "@tanstack/react-query";
import { getPokemons } from '@services/pokemonService';

export default function PokemonList() {
  const query = useQuery({
    queryKey: ['pokemons'],
    queryFn: getPokemons
  });


  if (query.isLoading) {
    return <div>Chargement...</div>;
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {query.data!.results.map((pokemon, index) => {
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