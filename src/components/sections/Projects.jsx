import React from "react";
import FitClub from "../../assets/fitclub.JPG";
import NikeStore from "../../assets/nikeStore.JPG";
import RevealOnScroll from "../RevealOnScroll";
function Projects() {
  return (
    <RevealOnScroll>
    <section
      id="projects"
      className="min-h-screen flex items-center justify-centerpy-20"
    >
      
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-clos-1 md:grid-cols-2 gap-6">
            {/* Start Project */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2">Fit Club</h3>
              <p className="text-gray-400 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore, unde.
              </p>
              <div>
                {["React", "Html", "Css", "JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-transparent-100 text-cyan-500 py-2 px-4 rounded-full text-sm hover:-translate-y-1 hover:bg-cyan-200/20 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <img src={FitClub} className="p-2" />
                <a
                  href="https://momenzakii.github.io/Fit_Club/"
                  target="blank"
                  className="text-blue-400 hover:text-blue-300 transition-colos"
                >
                  View Project →
                </a>
              </div>
            </div>
            {/* End Project */}
            {/* Start Project */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2">Nike Store</h3>
              <p className="text-gray-400 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore, unde.
              </p>
              <div>
                {["Html", "Css", "JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-transparent-100 text-cyan-500 py-2 px-4 rounded-full text-sm hover:-translate-y-1 hover:bg-cyan-200/20 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <img src={NikeStore} className="p-2" />
                <a
                  href="https://momenzakii.github.io/Nike-Store/"
                  target="blank"
                  className="text-blue-400 hover:text-blue-300 transition-colos"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
    </section>
      </RevealOnScroll>
  );
}

export default Projects;
