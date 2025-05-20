import usePokemons from './usePokemons';
import defaultClass from './pokemonList.module.css';

export default function PokemonList() {
  const { isLoading, pokemons } = usePokemons();

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  return (
    <div className={defaultClass.container}>
      {pokemons.map((pokemon: { name: string }, index: number) => {
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