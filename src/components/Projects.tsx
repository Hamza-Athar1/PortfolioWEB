import React, { FC, useState } from "react";
import { FaYoutube } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "animate.css/animate.min.css";

interface Project {
  title: string;
  description: string;
  tools: string[];
  role: string;
  youtubeLink: string;
}

const projectData: Project[] = [
  {
    title: "Hospital Management System",
    description:
      "Advanced system with appointment booking, patient records, and billing modules.",
    tools: ["C++", "Qt", "SQL"],
    role: "Lead Developer",
    youtubeLink: "https://youtu.be/j3n6Qbp9LkQ",
  },
  {
    title: "Assassin's Creed Website",
    description:
      "Responsive site showcasing the history, characters, and lore of Assassin's Creed.",
    tools: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    role: "Frontend Developer",
    youtubeLink: "https://youtu.be/5bfJ1F2nbaY",
  },
  {
    title: "React Mini Projects",
    description:
      "Collection of small React apps demonstrating state, hooks, and routing.",
    tools: ["React", "Router", "Context API"],
    role: "Full-Stack Developer",
    youtubeLink: "https://www.youtube.com/watch?v=MAAnaAg4CPM",
  },
];

export const Projects: FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  const cardColors = ["#1e1e2f", "#2a2a3d", "#1f2a36"];

  return (
    <section
      id="projects"
      className="container-fluid py-5"
      style={{ backgroundColor: "#121212", color: "#f8f9fa" }}
    >
      <div className="container">
        <h2
          className="display-5 text-center mb-5"
          style={{
            textDecoration: "underline",
            textDecorationColor: "#0d6efd",
            textUnderlineOffset: "10px",
          }}
        >
          Projects & Work Samples
        </h2>

        <div className="row g-4">
          {projectData.map((proj, i) => (
            <div
              key={proj.title}
              className="col-12 col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay={`${i * 100}`}
            >
              <div
                onMouseEnter={() => setHovered(proj.title)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => window.open(proj.youtubeLink, "_blank")}
                style={{
                  backgroundColor: cardColors[i % cardColors.length],
                  borderRadius: "0.75rem",
                  overflow: "hidden",
                  cursor: "pointer",
                  height: "100%",
                  boxShadow:
                    hovered === proj.title
                      ? "0 12px 24px rgba(0,0,0,0.5)"
                      : "0 4px 12px rgba(0,0,0,0.3)",
                  transform:
                    hovered === proj.title
                      ? "translateY(-5px)"
                      : "translateY(0)",
                  transition: "all 0.3s ease-in-out",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ padding: "1rem", flexGrow: 1 }}>
                  <h3 className="h5 fw-bold mb-2">{proj.title}</h3>
                  <p style={{ color: "#e0e0e0", minHeight: "3rem" }}>
                    {proj.description}
                  </p>

                  <div className="mb-3">
                    {proj.tools.map((tool) => (
                      <span
                        key={tool}
                        style={{
                          display: "inline-block",
                          backgroundColor: "#333",
                          color: "#fff",
                          padding: "0.25rem 0.5rem",
                          borderRadius: "0.25rem",
                          marginRight: "0.5rem",
                          fontSize: "0.8rem",
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    background: "#1a1a1a",
                    padding: "0.75rem 1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <small style={{ color: "#cfd2d6" }}>{proj.role}</small>
                  <FaYoutube
                    size={20}
                    style={{ color: "#FF0000", flexShrink: 0 }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
