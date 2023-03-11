import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// api
import { getPokemonByID, getSpeciesByID } from "../services/api";
import { colorsType, statsObj } from "../utils/utils";
import LoadingPage from "./LoadingPage";

const urlGif =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated";

const PokemonInfo = ({ id, isShowInfo, setIsShowInfo }) => {
  const [pokemon, setPokemon] = useState({});
  const [type, setType] = useState("#fff");
  const [stats, setStats] = useState([]);
  const [flavorText, setFlavorText] = useState("");
  const [abilities, setAbilities] = useState([]);

  const [loaded, setLoaded] = useState(false);

  const fetchPokemonById = async () => {
    let res = await getPokemonByID(id);
    if (res) {
      setPokemon(res);
      setType(res.types[0].type.name);
      setStats(res.stats);
      setAbilities(res.abilities);
      setTimeout(() => {
        setLoaded(!loaded);
      }, 1000);
    }
  };

  const fetchSpeciesByID = async () => {
    let res = await getSpeciesByID(id);
    res.flavor_text_entries.map((data) => {
      if (data.language.name == "en") {
        setLoaded(!loaded);
        setFlavorText(data.flavor_text);
      }
    });
  };

  useEffect(() => {
    fetchPokemonById();
    fetchSpeciesByID();
  }, []);

  return (
    <>
      {loaded ? (
        <>
          <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.04,
                // delay: 0.5,
                // ease: [0, 0.71, 0.2, 1.01],
                ease: "anticipate",
              }}
              className={`relative w-auto my-8 mx-4 max-w-5xl ease-linear transition-all duration-300 ${
                isShowInfo ? "opacity-100" : "opacity-0"
              } `}
            >
              {/*content*/}
              <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div
                  className="relative flex items-start justify-between border-b border-solid border-slate-200  rounded-t-xl bg-opacity-50"
                  style={{ backgroundColor: `${colorsType[type]}` }}
                >
                  {/* weight, height */}
                  <div className="">
                    <p className="circle-info -left-1 md:-left-3">
                      {pokemon.weight / 10} kg
                    </p>
                    <p className="circle-info -right-1 md:-right-3 -top-5 ">
                      {pokemon.height / 10} m
                    </p>
                  </div>
                  <div className="max-w-[450px] max-h-[22vh]">
                    <img
                      className="absolute bottom-2/3 left-1/2 transform -translate-x-1/2 h-[110px] md:h-[130px] lg:h-[160px] opacity-100"
                      style={{ imageRendering: "pixelated" }}
                      src={`${urlGif}/${id}.gif`}
                      alt={pokemon.name}
                    />
                  </div>
                  <h3 className="capitalize text-3xl font-semibold text-center w-full mt-8 mb-4 text-white">
                    {pokemon.name}
                  </h3>
                </div>
                {/*about*/}
                <div className="relative p-6 flex-auto">
                  <h3 className="title">About</h3>
                  <p className="mb-2 text-gray-500 text-center">{flavorText}</p>

                  {/* abilities */}
                  <h3 className="title mt-4">Abilities</h3>
                  <div className="flex items-center justify-center gap-x-3">
                    {abilities.map((ability, index) => {
                      return (
                        <div
                          key={index}
                          className="flex justify-around items-center flex-col rounded-full p-2 text-sm text-gray-900 font-semibold mb-2"
                        >
                          <p className="bg-gray-100 bg-opacity-75 px-2 py-1 rounded-lg">
                            {ability.ability.name}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Stats */}
                  <h3 className="title">Stats</h3>
                  <div className="flex items-center justify-center gap-x-3">
                    {stats.map((stat, index) => {
                      return (
                        <div
                          key={index}
                          className="flex justify-around items-center flex-col rounded-full p-2 text-sm text-white font-semibold"
                          style={{
                            backgroundColor: `${statsObj[index].color}`,
                          }}
                        >
                          <p className="">{statsObj[index][stat.stat.name]}</p>
                          <p>{stat.base_stat}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
                  <motion.div
                    className="text-red-500 background-transparent font-bold uppercase px-4 py-1 text-sm outline-none focus:outline-none mr-1 transition-all duration-150 hover:cursor-pointer"
                    type="button"
                    onClick={() => setIsShowInfo(!isShowInfo)}
                  >
                    Close
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
          <LoadingPage />
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </div>
      )}
    </>
  );
};

export default PokemonInfo;
