import React from "react";
import RevealOnScroll from "../RevealOnScroll";

function About() {
  const frontendSkills = [
    "Html",
    "Css",
    "JavaScript",
    "Bootstrap",
    "Jquery",
    "TailwindCSS",
    "React JS",
  ];
  const backendSkills = ["PHP", "MySQL"];
  const graphicDesignSkills = [
    "Social Media Design",
    "Maniplution",
    "Logo Design",
    "Brand Design",
  ];

  return (
    <RevealOnScroll>
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Former graphic and social media designer, blending visual
              creativity with functional web development.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              <div className="rounded-lg p-6 bg-transparent shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-4 text-center">
                  Front-end
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-tansparent text-cyan-500 py-2 px-4 rounded-full text-sm hover:-translate-y-1 hover:bg-cyan-200/20 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-lg p-9 bg-transparent shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-4 text-center">Back-end</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-transparent-100 text-cyan-500 py-2 px-4 rounded-full text-sm hover:-translate-y-1 hover:bg-cyan-200/20 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-lg p-6 bg-transparent shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-4 text-center">
                  Graphic Design
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {graphicDesignSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-transparent-100 text-cyan-500 py-2 px-4 rounded-full text-sm hover:-translate-y-1 hover:bg-cyan-200/20 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-col-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>A.H.I in Information Systems</strong> -Alexandria
                  University (2019-2025)
                </li>
                <li>AASTMT: Web Development With PHP...</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300 ">
                <div>
                  <h4 className="font-semibold">
                    Graphic Designer at SAMY TRIPS(2022- Present)
                  </h4>
                  <p>Social Media Designer.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
      </RevealOnScroll>
  );
}

export default About;
