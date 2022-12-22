import React from "react";

import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const Home = () => {
  return (
    <main className="w-screen min-h-screen grid grid-cols-12 gap-1 bg-primary">
      {/* left menu */}
      <div className="col-span-2"></div>
      {/* middle container */}
      <div className="col-span-8">
        {/* Search box section */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center justify-center gap-4">
            <IoChevronBack className="text-xl text-textColor hover:text-textDarkColor" />
            <IoChevronForward className="text-xl text-textColor hover:text-textDarkColor" />
          </div>
          <div></div>
        </div>
      </div>
      {/* right menu */}
      <div className="col-span-2"></div>
    </main>
  );
};

export default Home;
