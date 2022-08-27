import React from "react";
import Header from "./components/header/Header";
import SearchBar from "./components/shared/SearchBar/SearchBar";

import "./app.css";

const App = () => {
  return (
    <>
      <Header />
      <div className="container !mt-[20px]">
        <SearchBar />
      </div>
    </>
  );
};

export default App;
