import React from "react";
import { hero } from "../assets";

const Hero = () => {
  return (
    <section id="home" className="w-full max-h-[800px] py-0 2xl:py-6 mx-auto relative">
      {/* overlay */}
      <div className="absolute w-full h-full text-primary max-h-[800px] bg-black/60 flex flex-col justify-center">
        <h1 className="px-6 text-4xl sm:text-6xl md:text-8xl font-semibold">
          Solar <br />
          <span className="text-tertiary">Solutions</span> for <br /> a Sustainable <br />
          Tomorrow <span className="text-tertiary">.</span>
        </h1>
      </div>
      <img
        src="https://images.unsplash.com/photo-1565728744382-61accd4aa148?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="hero image"
      />
    </section>
  );
};

export default Hero;
