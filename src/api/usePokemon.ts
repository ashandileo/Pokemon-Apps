import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import toInteger from "lodash/toInteger";
import { fetchAllPokemon, fetchPokemonDetail } from "./../fetcher/pokemons";

const useFetchAllPokemon = () => {
  const LIMIT = 20;

  return useInfiniteQuery(
    ["all-pokemon"],
    ({ pageParam }) => {
      return fetchAllPokemon({
        offset: pageParam,
        limit: LIMIT,
      });
    },
    {
      staleTime: 5 * 60 * 1000,
      getNextPageParam: (lastPage) => {
        if (lastPage?.data?.next) {
          const url = new URL(lastPage?.data?.next);
          const searchParams = new URLSearchParams(url.search);
          const offset = toInteger(searchParams.get("offset"));

          return offset;
        }
      },
    }
  );
};

const useFetchPokemonDetail = (id: number) => {
  return useQuery(["pokemon", id], () => fetchPokemonDetail(id), {
    staleTime: 5 * 60 * 1000,
  });
};

export { useFetchAllPokemon, useFetchPokemonDetail };
