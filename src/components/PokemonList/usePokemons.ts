import { useQuery } from "@tanstack/react-query";

const usePokemons = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['pokemons'],
    queryFn: async () => {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
      return res.json();
    }
  });

  return {
    isLoading,
    isError,
    pokemons: data?.results || null
  };
}

export default usePokemons;
