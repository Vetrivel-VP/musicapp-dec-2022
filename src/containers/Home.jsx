import React from "react";
import { LeftContainer, MiddleContainer, RightContainer } from "../components";

const Home = () => {
  return (
    <main className="w-screen min-h-screen grid grid-cols-12 gap-1 bg-primary">
      <LeftContainer />
      <MiddleContainer />
      <RightContainer />
    </main>
  );
};

export default Home;
