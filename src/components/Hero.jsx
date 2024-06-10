import React from "react";
import { hero } from "../assets";

const Hero = () => {
  return (
    <section id="home" className="w-full h-screen flex py-6 sm:py-10">
      <div
        className="flex-1 flex justify-start items-center xl:px-0 sm:px-16 px-6"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
          backgroundPosition: "center",
          borderRadius: "1rem",
        }}
      >
        <h1 className="ml-0 sm:ml-16 text-primary text-6xl md:text-7xl lg:text-8xl font-semibold">
          Solar <br />
          <span className="text-tertiary">Solutions</span> for <br /> a
          Sustainable <br /> Tomorrow<span className="text-tertiary">.</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
