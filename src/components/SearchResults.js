import React from "react";
import { FaPlayCircle } from "react-icons/fa";

const SearchResults = () => {
  return (
    <div className=" w-[980px] h-[626px] ml-[223px] mt-[40px] rounded-lg border border-gray-300 ml">
      <div className=" flex items-center  mt-[39px]">
        <FaPlayCircle className=" w-[50px] h-[50px] ml-[17px] cursor-pointer"/>
        <h1 className=" m-2">Phonetics Word</h1>
      </div>
      <div className=" mt-[39px]">
        <button className="ml-[17px]  bg-black text-white w-[93px] h-[33px] rounded-lg">
          Noun
        </button>
        <button className="ml-[17px] bg-black text-white w-[93px] h-[33px] rounded-lg">
          Verb
        </button>
      </div>
      <div className="ml-[17px] mt-[40px]">
        <ol>
            <li>1.</li>
            <li>2.</li>
        </ol>
      </div>
    </div>
  );
};

export default SearchResults;
