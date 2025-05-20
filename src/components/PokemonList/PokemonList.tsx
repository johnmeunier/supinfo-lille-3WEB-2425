import { useQuery } from "@tanstack/react-query";
import { getPokemons } from '@services/pokemonService';
import defaultClass from './pokemonList.module.css';

export default function PokemonList() {
  const query = useQuery({
    queryKey: ['pokemons'],
    queryFn: getPokemons
  });


  if (query.isLoading) {
    return <div>Chargement...</div>;
  }

  return (
    <div className={defaultClass.container}>
      {query.data!.results.map((pokemon, index) => {
        const id = index + 1;
        return (
          <div
            key={pokemon.name}
            className={defaultClass.card}
          >
            <h3>{pokemon.name}</h3>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
              alt={pokemon.name}
              className={defaultClass.image}
            />
          </div>
        );
      })}
    </div>
  );
}