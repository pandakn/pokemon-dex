import React, { useState, useEffect } from "react";
import pokeball from "../assets/icon/pokeball.png";

const LoadingPage = () => {
  return (
    <div className="w-full h-full absolute inset-0 flex justify-center items-center z-50">
      <img src={pokeball} alt="loading" className="animate-spin h-24 w-24" />
    </div>
  );
}

export default LoadingPage;
