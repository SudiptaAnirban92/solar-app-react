const Hero = () => {
  return (
    <section id="home" className="relative w-full h-full py-0 2xl:py-6 mx-auto">
      {/* overlay */}
      <div className="absolute w-full h-full text-primary max-h-[800px] bg-black/60 flex flex-col justify-center pl-2 sm:pl-8 2xl:rounded-xl">
        <h1 className="px-2 text-5xl sm:text-6xl md:text-8xl font-semibold">
          Solar <br />
          <span className="text-tertiary text-5xl sm:text-6xl md:text-8xl">
            Solutions
          </span>{" "}
          for <br /> a Sustainable <br />
          Tomorrow<span className="text-tertiary">.</span>
        </h1>
      </div>
      <img
        src="https://images.unsplash.com/photo-1565728744382-61accd4aa148?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="hero image"
        className="w-full h-[800px] object-cover 2xl:rounded-xl"
      />
    </section>
  );
};

export default Hero;
