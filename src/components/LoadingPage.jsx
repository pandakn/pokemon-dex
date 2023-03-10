import React, { useState, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import pokeball from "../assets/icon/pokeball.png";

const LoadingPage = () => {
  return (
    <div className="w-full h-full absolute inset-0 flex justify-center items-center bg-white opacity-75">
      <img src={pokeball} alt="loading" className="animate-spin h-24 w-24" />
    </div>
  );
}

export default LoadingPage;
