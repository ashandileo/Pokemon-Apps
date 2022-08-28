import fetchClient from "../utils/fetchClient";

const fetchAllPokemon = (params: any) => {
  return fetchClient.get("pokemon", { params });
};

const fetchPokemonDetail = (id: number) => {
  return fetchClient.get(`pokemon/${id}`);
};

export { fetchAllPokemon, fetchPokemonDetail };
