import React, { FC } from "react";
import { FaGamepad, FaMusic, FaCamera, FaPaintBrush } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "animate.css/animate.min.css";

interface Hobby {
  title: string;
  description: string;
  icon: JSX.Element;
  color: string; // background color for the icon circle
}

const hobbies: Hobby[] = [
  {
    title: "Gaming",
    description:
      "I dive into RPGs and strategy titles—sharpening my problem-solving one epic quest at a time.",
    icon: <FaGamepad />,
    color: "#6f42c1",
  },
  {
    title: "Music Production",
    description:
      "I compose electronic tracks and experiment with sound design in Ableton Live.",
    icon: <FaMusic />,
    color: "#d63384",
  },
  {
    title: "Photography",
    description:
      "Capturing landscapes and portraits—editing my shots in Lightroom to tell a story.",
    icon: <FaCamera />,
    color: "#20c997",
  },
  {
    title: "3D Art",
    description:
      "Creating abstract renders and scene layouts in Blender to explore form and light.",
    icon: <FaPaintBrush />,
    color: "#fd7e14",
  },
];

export const Hobbies: FC = () => (
  <section
    id="hobbies"
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
        Hobbies & Interests
      </h2>

      <div className="row g-4">
        {hobbies.map((hobby, index) => (
          <div
            key={hobby.title}
            className="col-12 col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <div
              style={{
                backgroundColor: "#212529",
                borderRadius: "0.5rem",
                boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
                overflow: "hidden",
                padding: "1.5rem",
                textAlign: "center" as const,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-5px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  margin: "0 auto 1rem",
                  borderRadius: "50%",
                  backgroundColor: hobby.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  color: "#fff",
                }}
              >
                {hobby.icon}
              </div>
              <h3 className="h5 mb-2">{hobby.title}</h3>
              <p style={{ color: "#adb5bd", fontSize: "0.9rem" }}>
                {hobby.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hobbies;
