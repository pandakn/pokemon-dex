const urlPokemon = "https://pokeapi.co/api/v2/pokemon";
const limit = 650;

const listPokemonInfo = async () => {
  const poke = await fetch(`${urlPokemon}?limit=${limit}`)
    .then((response) => response.json())
    .then(async (allPoke) => {
      const promises = allPoke.results.map(async (pokemon) => {
        const res = await getPokemon(pokemon);
        return res;
      });
      const data = await Promise.all(promises);
      return data;
    });

  return poke;
};

const getPokemon = async (pokemon) => {
  let url = pokemon.url;

  const res = await fetch(url)
    .then((response) => response.json())
    .then((pokeData) => {
      if (pokeData) {
        return pokeData;
      }
    });

  return res;
};

const getPokemonByID = async (id) => {
  const res = await fetch(`${urlPokemon}/${id}`)
    .then((response) => response.json())
    .then((pokeData) => {
      if (pokeData) {
        return pokeData;
      }
    });

  return res;
};

const getSpeciesByID = async (id) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    .then((response) => response.json())
    .then((pokeData) => {
      if (pokeData) {
        return pokeData;
      }
    });

  return res;
};

export { listPokemonInfo, getPokemonByID, getSpeciesByID };
