import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import SearchBar from "./components/shared/SearchBar/SearchBar";

import { useFetchAllPokemon } from "./api/usePokemon";

import "./app.css";

const App = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  console.log("allPokemons", allPokemons);

  const { isSuccess, data } = useFetchAllPokemon();

  useEffect(() => {
    if (isSuccess) {
      setAllPokemons(data?.data?.results);
    }
  }, [isSuccess]);

  return (
    <>
      <Header />
      <div className="container !mt-[20px]">
        <SearchBar />
      </div>

      <ul>
        {allPokemons?.map((pokemon: any, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
