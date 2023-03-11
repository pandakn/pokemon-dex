import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { colorsType } from "../utils/utils";
import PokemonInfo from "./PokemonInfo";

const Card = ({ id, image, name, type }) => {
  const [isShowInfo, setIsShowInfo] = useState(false);
  const [pokemonID, setPokemonID] = useState(1);

  const handleClick = (id) => {
    setPokemonID(id);
    setIsShowInfo(!isShowInfo);
  };

  return (
    <>
      <div
        onClick={() => handleClick(id)}
        value={id}
        className="w-full sm:w-[30%] lg:w-[20%] xl:w-[25%] mx-8 bg-white border border-white rounded-xl shadow-md transition duration-300 ease-in-out hover:cursor-pointer hover:scale-110 hover:border-gray-300"
      >
        <div className="p-5 flex flex-col justify-center items-center text-center">
          <div className="relative">
            <p className="text-6xl sm:text-5xl md:text-7xl text-gray-200">
              #{("00" + id).slice(-3)}
            </p>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img
                className="max-w-full"
                src={image}
                alt={name}
              />
            </div>
          </div>
          <h3 className="text-2xl sm:text-lg font-bold tracking-tight text-gray-600 capitalize my-2 ">
            {name}
          </h3>
          <div className="flex gap-4">
            {type.map((data, index) => {
              return (
                <p
                  key={index}
                  className={` text-white text-sm px-2 py-1 rounded-lg font-bold`}
                  style={{ backgroundColor: `${colorsType[data]}` }}
                >
                  {data}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      {/* {loading && <Loading /> } */}
      {isShowInfo && (
        <PokemonInfo
          key={pokemonID}
          isShowInfo={isShowInfo}
          setIsShowInfo={setIsShowInfo}
          id={pokemonID}
        />
      )}
    </>
  );
};

export default Card;
