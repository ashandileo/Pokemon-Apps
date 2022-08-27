import { useQuery } from "@tanstack/react-query";
import { fetchAllPokemon } from "./../fetcher/pokemons";

const useFetchAllPokemon = () => {
  return useQuery(["pokemons"], fetchAllPokemon, {
    staleTime: 5 * 60 * 1000,
  });
};

export { useFetchAllPokemon };
