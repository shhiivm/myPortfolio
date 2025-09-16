import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Project";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
// import { HashLink } from 'react-router-hash-link'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
