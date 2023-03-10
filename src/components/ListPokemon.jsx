import React, { useState, useEffect } from "react";
// component
import Card from "./Card";
import LoadingPage from "./LoadingPage";
import Searchbar from "./Searchbar";

// api
import { listPokemonInfo } from "../services/api";

const ListPokemon = () => {
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterPokemon, setFilterPokemon] = useState(pokemonInfo);

  useEffect(() => {
    const newFilteredPokemons = pokemonInfo.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(search);
    });

    setFilterPokemon(newFilteredPokemons);
  }, [pokemonInfo, search]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearch(searchFieldString);
  };

  const fetchPokemonInfo = async () => {
    let res = await listPokemonInfo();
    if (res) {
      // console.log(res)
      setPokemonInfo(res);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  };

  useEffect(() => {
    fetchPokemonInfo();
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className="mt-6">
          <Searchbar onChangeHandler={onSearchChange} />
          <div className="flex flex-wrap justify-center items-center gap-8 my-8">
            {filterPokemon.map((poke) => {
              return (
                <Card
                  key={poke.id}
                  id={poke.id}
                  name={poke.name}
                  image={poke.sprites.front_default}
                  type={poke.types.map((data) => {
                    const type = data.type.name;
                    return type;
                  })}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default ListPokemon;
