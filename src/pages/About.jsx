import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { CTA } from "../components";
import { experiences, skills } from "../constants";

const About = () => {
  return (
    <section className="max-container">
      {/* Introduction */}
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Chirag
        </span>{" "}
        👋
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          I'm a Computer Science student at York University with a strong
          foundation in backend development, cloud computing, and full-stack
          engineering.
        </p>

        <p>
          I build scalable applications using Node.js, Python, databases, AWS,
          Docker, and RESTful APIs.
        </p>

        <p>
          I'm currently focused on growing my skills in backend engineering,
          cloud computing, software development, and system design.
        </p>
      </div>

      {/* Skills */}
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div
              className="block-container w-20 h-20"
              key={skill.name}
              title={skill.name}
            >
              <div className="btn-back rounded-xl" />

              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Work Experience */}
      <div className="py-16">
        <h3 className="subhead-text">Work Experience.</h3>

        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            My experience spans IT support, system administration, backend
            development, cloud technologies, and web development.
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={index}
                contentStyle={{
                  background: "#1e293b",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid #1e293b",
                }}
                date={experience.date}
                iconStyle={{
                  background: "#1e293b",
                  color: "#fff",
                }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                   <img
  src={experience.icon}
  alt={`${experience.company_name} logo`}
  className="w-[75%] h-[75%] object-contain"
/>
                  </div>
                }
              >
                <div>
                  <h3 className="text-white text-[24px] font-bold">
                    {experience.title}
                  </h3>

                  <p
                    className="text-secondary text-[16px] font-semibold"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className="mt-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, pointIndex) => (
                    <li
                      key={`experience-point-${pointIndex}`}
                      className="text-white text-[14px] pl-1 tracking-wider"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      {/* Education */}
      <div className="py-16">
        <h3 className="subhead-text">Education.</h3>

        <div className="mt-8 flex flex-col gap-6">
          {/* York University */}
          <div className="info-card">
            <h4 className="text-xl font-bold text-slate-900">
              York University
            </h4>

            <p className="mt-2 text-blue-600 font-semibold">
              Bachelor of Science in Computer Science (BSc Honours)
            </p>

            <p className="mt-1 text-slate-600">
              Toronto, Ontario • September 2026 – Present
            </p>
          </div>

          {/* Seneca Polytechnic */}
          <div className="info-card">
            <h4 className="text-xl font-bold text-slate-900">
              Seneca Polytechnic
            </h4>

            <p className="mt-2 text-blue-600 font-semibold">
              Computer Programming
            </p>

            <p className="mt-1 text-slate-600">
              Toronto, Ontario • January 2022 – April 2024
            </p>

            <p className="mt-2 text-slate-600">
              GPA: 3.6/4.0 • Dean&apos;s Honor List
            </p>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="py-16">
        <h3 className="subhead-text">Certifications.</h3>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* CompTIA A+ */}
          <div className="info-card">
            <h4 className="text-xl font-bold text-slate-900">
              CompTIA A+
            </h4>

            <p className="mt-2 text-slate-600">
              May 2025
            </p>
          </div>

          {/* CompTIA Network+ */}
          <div className="info-card">
            <h4 className="text-xl font-bold text-slate-900">
              CompTIA Network+
            </h4>

            <p className="mt-2 text-slate-600">
              June 2025
            </p>
          </div>

          {/* Oracle */}
          <div className="info-card">
            <h4 className="text-xl font-bold text-slate-900">
              Oracle Cloud Infrastructure Foundations Associate
            </h4>

            <p className="mt-2 text-slate-600">
              May 2024
            </p>
          </div>

          {/* AWS */}
          <div className="info-card">
            <h4 className="text-xl font-bold text-slate-900">
              AWS Cloud Training
            </h4>

            <p className="mt-2 text-slate-600">
              Troubleshooting, DevOps &amp; Billing • June 2024
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <CTA />
    </section>
  );
};

export default About;