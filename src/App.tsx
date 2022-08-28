import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import startCase from "lodash/startCase";

import Header from "./components/header/Header";
import SearchBar from "./components/shared/SearchBar/SearchBar";
import Badge from "./components/shared/SearchBar/Badge";
import Skeleton from "react-loading-skeleton";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { useFetchAllPokemon, useFetchPokemonDetail } from "./api/usePokemon";

import "./app.css";

interface IPokemon {
  name: string;
  url: string;
}

const App = () => {
  const [allPokemons, setAllPokemons] = useState([]);

  const { ref, inView } = useInView();
  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } =
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
          {isFetching && <Skeleton height={160} />}
        </ul>
        <div className="opacity-0" ref={ref} />
      </div>
    </>
  );
};

interface IPokemonProps {
  pokemon: IPokemon;
  id: number;
}

const Pokemon = ({ pokemon, id }: IPokemonProps) => {
  const { data, isFetching } = useFetchPokemonDetail(id);

  const types = data?.data?.types;

  const getTypeVariantColor = (type: string) => {
    switch (type) {
      case "grass":
        return "green";
      case "flying":
        return "indigo";
      case "poison":
        return "purple";
      case "water":
        return "blue";
      case "fire":
        return "red";
      case "normal":
        return "gray";
      case "electric":
        return "yellow";
      case "fairy":
        return "pink";
      case "bug":
        return "lime";
      case "fighting":
        return "rose";
      default:
        return "gray";
    }
  };

  return (
    <div className="shadow rounded cursor-pointer transition-all flex flex-col items-center justify-center py-[12px] px-[8px] relative">
      <p className="absolute top-[8px] right-[8px]">{`#${id}`}</p>
      <div className="w-[80px] h-[80px]">
        <LazyLoadImage
          alt={pokemon?.name}
          effect="blur"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          className="w-full h-full"
        />
      </div>

      <p className="mb-[8px]">{startCase(pokemon.name)}</p>
      <div className="flex items-center">
        {isFetching ? (
          <>
            <Skeleton width={56} height={24} className="mr-2" />
            <Skeleton width={56} height={24} className="mr-2" />
          </>
        ) : (
          types?.map((type: any, index: number) => (
            <Badge
              variant={getTypeVariantColor(type?.type?.name)}
              text={startCase(type?.type?.name)}
              key={index}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
