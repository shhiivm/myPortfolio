import React from "react";
import { HeroCards } from "../extras/HeroCards";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 pb-20">
      <section className="h-[50vh] sm:h-[60vh] flex flex-col justify-center items-center text-center">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4 md:mb-6 leading-tight">
          Shivanand Singh
          {/* <span className="block text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-1 md:mt-2">
            Web Developer
          </span> */}
        </h1>
        <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto mb-8 md:mb-12 leading-relaxed px-4 sm:px-0">
          Hi, I’m Shivanand Singh, an MCA graduate with a strong foundation in
          Java, JavaScript, and React.js. I enjoy building interactive web
          applications.
          <span className="font-semibold text-blue-600">
            {" "}
            I have recently completed 10+ beginner-friendly projects
          </span>{" "}
          built with HTML, CSS, and Vanilla JavaScript
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-0 sm:mb-0 px-4 sm:px-0">
          <a
            href="#projects"
            className="items-center px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-2xl hover:shadow-lg transition-all duration-300 inline-flex shadow-lg transform hover:scale-105"
          >
            View My Work
          </a>
        </div>
      </section>

      <HeroCards />
    </div>
  );
};

export default Hero;
