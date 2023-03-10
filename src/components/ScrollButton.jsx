import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollButton = () => {
  const [showBtn, setShowBtn] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = window.pageYOffset;
      scrolled > 500 ? setShowBtn(!showBtn) : setShowBtn(false);
    };

    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <>
      {showBtn && (
        <div className="fixed bottom-4 right-1 sm:right-4 lg:right-8 hover:cursor-pointer z-10">
          <FaArrowCircleUp
            onClick={scrollToTop}
            className=" text-3xl sm:text-5xl transition duration-100 ease-in-out text-red-400 hover:text-red-300 animate-bounce"
          />
        </div>
      )}
    </>
  );
};

export default ScrollButton;
