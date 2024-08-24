import React from "react";
import Hero from "./Hero";
import HowWorks from "./HowWorks";
import Rewards from "./Rewards";
import About from "./About";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <HowWorks />
      <Rewards />
    </>
  );
}
