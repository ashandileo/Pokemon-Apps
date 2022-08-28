import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import startCase from "lodash/startCase";

import Header from "./components/header/Header";
import SearchBar from "./components/shared/SearchBar/SearchBar";

import { useFetchAllPokemon, useFetchPokemonDetail } from "./api/usePokemon";

import "./app.css";

interface IPokemon {
  name: string;
  url: string;
}

const App = () => {
  const [allPokemons, setAllPokemons] = useState([]);

  const { ref, inView } = useInView();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useFetchAllPokemon();

  useEffect(() => {
    if (data) {
      let newPokemons = [] as any;

      data?.pages?.map((page) => {
        newPokemons = [...newPokemons, ...page?.data?.results];
      });

      setAllPokemons(newPokemons);
    }
  }, [data]);

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage]);

  return (
    <>
      <Header />
      <div className="w-full p-[20px] bg-white sticky top-[56px] z-[20] shadow">
        <SearchBar containerClass="container" />
      </div>

      <div className="container !mt-[20px]">
        <ul className="grid grid-cols-4 gap-4">
          {allPokemons?.map((pokemon: IPokemon, index) => (
            <Pokemon key={index} pokemon={pokemon} id={index + 1} />
          ))}
        </ul>
        <button className="opacity-0" onClick={() => fetchNextPage()} ref={ref}>
          Fetch Next Page
        </button>
      </div>
    </>
  );
};

interface IPokemonProps {
  pokemon: IPokemon;
  id: number;
}

const Pokemon = ({ pokemon, id }: IPokemonProps) => {
  const { data } = useFetchPokemonDetail(id);

  const types = data?.data?.types;

  return (
    <div className="shadow rounded cursor-pointer transition-all flex flex-col items-center justify-center py-[12px] px-[8px] relative">
      <p className="absolute top-[8px] right-[8px]">{`#${id}`}</p>
      <img
        className="w-[80px] h-[80px]"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      />
      <p>{startCase(pokemon.name)}</p>
    </div>
  );
};

export default App;
