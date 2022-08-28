import fetchClient from "../utils/fetchClient";

const fetchAllPokemon = () => {
  return fetchClient.get("pokemon");
};

const fetchPokemonDetail = (id: number) => {
  return fetchClient.get(`pokemon/${id}`);
};

export { fetchAllPokemon, fetchPokemonDetail };
