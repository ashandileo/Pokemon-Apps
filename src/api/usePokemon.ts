import { useQuery } from "@tanstack/react-query";
import { fetchAllPokemon, fetchPokemonDetail } from "./../fetcher/pokemons";

const useFetchAllPokemon = () => {
  return useQuery(["all-pokemon"], fetchAllPokemon, {
    staleTime: 5 * 60 * 1000,
  });
};

const useFetchPokemonDetail = (id: number) => {
  return useQuery(["pokemon", id], () => fetchPokemonDetail(id), {
    staleTime: 5 * 60 * 1000,
  });
};

export { useFetchAllPokemon, useFetchPokemonDetail };
