import { FC, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "animate.css/animate.min.css";

export const Skills: FC = () => {
  const skillCategories: Record<string, { name: string; level: number }[]> = {
    "Programming Languages": [
      { name: "C++", level: 89 },
      { name: "Python", level: 80 },
      { name: "Java", level: 70 },
    ],
    "Web Development": [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 80 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 75 },
    ],
    "Databases & Data Handling": [
      { name: "SQL", level: 75 },
      { name: "MongoDB", level: 65 },
    ],
    "Tools & Technologies": [
      { name: "Git", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Linux", level: 70 },
      { name: "QT Framework", level: 90 },
    ],
    "Soft Skills": [
      { name: "Communication", level: 95 },
      { name: "Teamwork", level: 90 },
      { name: "Problem-Solving", level: 92 },
    ],
  };

  const [hovered, setHovered] = useState<string | null>(null);

  const getProgressColor = (lvl: number) => {
    if (lvl >= 85) return "bg-success";
    if (lvl >= 70) return "bg-info";
    return "bg-warning";
  };

  return (
    <section
      id="skills"
      className="container py-5"
      style={{ color: "#f8f9fa" }}
    >
      <h2
        className="mb-5 display-5 text-center"
        style={{
          textDecoration: "underline",
          textDecorationColor: "#0d6efd",
          textUnderlineOffset: "10px",
        }}
      >
        Skills
      </h2>

      {Object.entries(skillCategories).map(([category, items]) => (
        <div key={category} className="mb-5" data-aos="fade-up">
          <h3 className="h4 mb-3" style={{ color: "#adb5bd" }}>
            {category}
          </h3>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {items.map((skill) => (
              <div key={skill.name} className="col" data-aos="zoom-in">
                <div
                  onMouseEnter={() => setHovered(`${category}-${skill.name}`)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    backgroundColor: "#212529",
                    color: "#f8f9fa",
                    borderRadius: "0.5rem",
                    boxShadow:
                      hovered === `${category}-${skill.name}`
                        ? "0 8px 20px rgba(0,0,0,0.7)"
                        : "0 4px 12px rgba(0,0,0,0.5)",
                    padding: "1rem",
                    textAlign: "center" as const,
                    transform:
                      hovered === `${category}-${skill.name}`
                        ? "translateY(-5px)"
                        : "translateY(0)",
                    transition:
                      "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  }}
                >
                  <h5 className="fw-bold mb-2">{skill.name}</h5>
                  <div
                    className="progress mb-2"
                    style={{
                      height: "1rem",
                      borderRadius: "0.5rem",
                      backgroundColor: "#343a40",
                    }}
                  >
                    <div
                      className={`progress-bar progress-bar-striped progress-bar-animated ${getProgressColor(
                        skill.level
                      )}`}
                      role="progressbar"
                      style={{
                        width: `${skill.level}%`,
                        transition: "width 1s ease-in-out",
                      }}
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      {skill.level}%
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
export default Skills;
