import { useState } from "react";
import ListPokemon from "./components/ListPokemon";
import ScrollButton from "./components/ScrollButton";

const  App = () => {
  return (
    <div className="">
      <ListPokemon />
      <ScrollButton />
    </div>
  );
}

export default App;
