import React from "react";
import { IoChevronBack, IoChevronForward, IoSearch } from "react-icons/io5";

const SearchComponent = () => {
  return (
    <div className="flex items-center justify-between gap-8 px-8 py-6">
      <div className="flex items-center justify-center gap-8">
        <IoChevronBack className="text-xl text-textColor hover:text-textDarkColor" />
        <IoChevronForward className="text-xl text-textColor hover:text-textDarkColor" />
      </div>

      <div className="flex items-center justify-center gap-4 flex-grow bg-gray-200 px-4 py-2 rounded-full">
        <IoSearch className="text-xl text-textColor hover:text-textDarkColor" />
        <input
          className="border-none outline-none bg-transparent w-full text-textDarkColor text-xl"
          type="text"
          placeholder="Search Here...!"
        />
      </div>
    </div>
  );
};

export default SearchComponent;
