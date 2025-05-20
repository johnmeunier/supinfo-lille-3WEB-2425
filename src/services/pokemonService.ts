export interface PokemonListResponse {
  results:
  {
    name: string;
    url: string;
  }[];

}

export async function getPokemons(): Promise<PokemonListResponse> {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
  return res.json();
}