import React from "react";

// icon
import { FaSearch } from "react-icons/fa";

const Searchbar = ({ onChangeHandler }) => {
  return (
    <div className="flex justify-center">
      <div className="mb-3 xl:w-96">
        <div className="relative flex w-full flex-wrap items-stretch">
          <FaSearch className="pointer-events-none z-10 absolute top-1/2 transform -translate-y-1/2 left-4 text-2xl text-red-500"/>
          <input
            type="search"
            className="shadow-lg rounded-xl relative m-0 -mr-px block min-w-0 flex-auto bg-clip-padding pl-12 pr-8 py-4 text-xl font-normal text-neutral-700 outline-none focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none"
            placeholder="Find your Pokémon..."
            aria-label="Search"
            onChange={onChangeHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
