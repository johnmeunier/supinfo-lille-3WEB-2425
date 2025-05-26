import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

// Get QueryClient from the context
interface Pokemon {
  name: string;
  url: string;
}

interface PokemonResponse {
  count: number;
  results: Pokemon[];
  previous: string | null;
  next: string | null;
}

const baseUrl = "https://pokeapi.co/api/v2/";

const usePokemons = () => {
  const [urlToFetch, setUrlToFetch] = useState(`${baseUrl}pokemon`);
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[] | undefined>(undefined);

  const { data, isLoading, isError } = useQuery<PokemonResponse>({
    queryKey: ['pokemons', urlToFetch],
    queryFn: async () => {
      const res = await fetch(urlToFetch);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return await res.json();
    }
  });

  const changeLimit = (value: number) => {
    if (value == 0) {
      value = data!.count;
    }
    const url = new URL(urlToFetch);
    url.searchParams.delete("limit");
    url.searchParams.append("limit", value.toString());
    setUrlToFetch(url.href);
  }

  const search = (keyword: string) => {
    setFilteredPokemons(data?.results.filter((pokemon: Pokemon) => pokemon.name.toLowerCase().includes(keyword.toLowerCase())))
  }

  const goTo = (url: string) => {
    setUrlToFetch(url);
  };

  return {
    isLoading,
    isError,
    pokemons: filteredPokemons || data?.results || null,
    previous: data?.previous || null,
    next: data?.next || null,
    goTo,
    changeLimit,
    search
  };
}

export default usePokemons;
