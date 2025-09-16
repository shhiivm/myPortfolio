import React from "react";
import { projectList } from "../Data";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <Navbar />
      <div id="projects" className="py-20 px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold mb-3 flex items-center justify-center ">
                {project.title}
              </h3>

              <div className="flex items-center justify-center">
                <a
                  href={project.live}
                  target="_blank"
                  className="group relative block overflow-hidden rounded-lg"
                >
                  <img
                    className="w-full h-auto transform transition duration-300 group-hover:scale-105"
                    src={project.download_url}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white text-lg font-bold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Live Preview
                  </div>
                </a>
              </div>

              <p className="text-gray-600 mb-4 flex items-center justify-center">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline flex items-center justify-center"
              >
                View Project code
              </a>
            </div>
          ))}
        </div>
        <div className="mt-10 flex items-center justify-center">
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg shadow hover:bg-gray-700 transition"
          >
            ⬅ Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
