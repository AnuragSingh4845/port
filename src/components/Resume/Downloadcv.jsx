import React from "react";
import { BiDownload } from "react-icons/bi";

const Downloadcv = () => {
  return (
    <div className="flex justify-center text-white font-raleway">
      <button
        className="flex space-x-2 place-content-evenly px-4 py-2 md:px-6 text-sm font-bold rounded-md my-4 border-2 border-gray-500 hover:bg-gray-700 hover:border-white"
        onClick={() => {
          window.open(
            "https://docs.google.com/document/d/19lCRuUlqSfZow5Q-XSm-XjNW3Vb9DyQTLRIH-9TNpbQ/edit?usp=sharing",
            "_blank"
          );
        }}
      >
        <BiDownload className="place-items-center text-lg" />
        <div className=" mx-2">Download CV</div>
      </button>
    </div>
  );
};

export default Downloadcv;
