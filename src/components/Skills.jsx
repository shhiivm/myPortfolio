import React from "react";

const Skills = () => {
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "Java",
    "Git & GitHub",
    "APIs integration",
    "Data Structures",
    "Algorithms",
  ];

  return (
    <section id="skills" className="py-20 px-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-6 py-3 bg-white shadow-md rounded-lg font-semibold hover:shadow-lg transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
