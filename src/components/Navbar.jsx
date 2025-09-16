import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white fixed top-0 w-full z-50 ">
      <h1 className="text-2xl font-bold">
        <a href="/" className="hover:text-blue-500">
          SS
        </a>
      </h1>
      <ul className="flex space-x-6 items-center">
        <li>
          <a href="/#" className="hover:text-blue-500">
            Home
          </a>
        </li>
        <li>
          <a href="/#about" className="hover:text-blue-500">
            About
          </a>
        </li>
        <li>
          <a href="/#projects" className="hover:text-blue-500">
            Projects
          </a>
        </li>
        <li>
          <a href="/#skills" className="hover:text-blue-500">
            Skills
          </a>
        </li>
        <li>
          <a href="/#contact" className="hover:text-blue-500">
            Contact
          </a>
        </li>
        <li>
          <a
            href="/shivanand-singh-resume.pdf"
            download
            className="items-center px-8 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-2xl hover:shadow-lg transition-all duration-300 inline-flex shadow-lg transform hover:scale-105"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
