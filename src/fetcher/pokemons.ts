import fetchClient from "../utils/fetchClient";

export const fetchAllPokemon = () => {
  return fetchClient.get("pokemon");
};
