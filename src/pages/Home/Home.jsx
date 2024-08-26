import React from "react";
import HowWorks from "./HowWorks";
import Rewards from "./Rewards";
import About from "./About";
import Hero from "../../components/Hero/Hero";

import heroImg from "../../assets/hero.webp";

export default function Home() {
  return (
    <>
      <Hero
        img={heroImg}
        title="get paid for your loyal opinion"
        subTitle="EARN AMAZING REWARDS BY COMPLETING SURVEYS IN YOUR FREE TIME!"
      />
      <About />
      <HowWorks />
      <Rewards />
    </>
  );
}
