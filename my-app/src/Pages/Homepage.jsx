import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white text-purple-400 text-center">
      <h1 className="text-6xl md:text-7xl font-bold mb-4" data-aos="fade-down">I'm Sridevidurga</h1>
      <h2 className="text-3xl md:text-4xl mb-6" data-aos="fade-up">
        <Typewriter
          words={["React Developer", "Full Stack Developer", "Web Developer"]}
          loop
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
        />
      </h2>
      <a
        href=" /MyPortfolio/projects "
        className="bg-yellow-400 text-purple-900 px-6 py-3 rounded-full font-bold hover:scale-110 transform transition duration-300 flex items-center gap-2"
        data-aos="zoom-in"
      >
        View Projects <FaArrowRight />
      </a>
    </div>
  );
};

export default Home;
