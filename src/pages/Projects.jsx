import React from "react";
import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Projects
        </span>
      </h1>

      <p className="text-slate-500 mt-2 leading-relaxed">
        Here are some of the projects I've built while developing my skills in
        full-stack development, backend engineering, databases, and software
        development. Explore the projects and check out the source code on
        GitHub.
      </p>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            {/* Project Icon */}
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />

              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt={`${project.name} icon`}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            {/* Project Information */}
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>

              <p className="mt-2 text-slate-500">
                {project.description}
              </p>

              {/* GitHub Link */}
              <div className="mt-5 flex items-center gap-2 font-poppins">
                  <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  View on GitHub
                  </a>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <CTA />
    </section>
  );
};

export default Projects;