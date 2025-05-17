import { FC } from "react";
import { FaBlog, FaBook, FaFileAlt, FaPalette } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "animate.css/animate.min.css";

interface Work {
  title: string;
  description: string;
  type: "blog" | "tutorial" | "essay" | "doc" | "art";
  iconColor: string;
}

const works: Work[] = [
  {
    title: "Deep Dive into React Hooks",
    description:
      "A comprehensive tutorial covering useState, useEffect, and custom hooks with real-world examples.",
    type: "tutorial",
    iconColor: "#0dcaf0",
  },
  {
    title: "Reflecting on Debugging",
    description:
      "An essay exploring strategies and mindset for effective bug-hunting in complex codebases.",
    type: "essay",
    iconColor: "#ffc107",
  },
  {
    title: "API Documentation: TaskTracker",
    description:
      "OpenAPI spec and Markdown docs for my TaskTracker backend, with code samples and response examples.",
    type: "doc",
    iconColor: "#198754",
  },
  {
    title: "My Tech Blog",
    description:
      "Weekly posts on web development, C++ tips, and career insights—20+ articles strong.",
    type: "blog",
    iconColor: "#6610f2",
  },
  {
    title: "3D Abstract Render",
    description:
      "A stylized abstract scene modeled and rendered entirely in Blender (Cycles).",
    type: "art",
    iconColor: "#fd7e14",
  },
];

const iconMap = {
  blog: <FaBlog />,
  tutorial: <FaBook />,
  essay: <FaFileAlt />,
  doc: <FaFileAlt />,
  art: <FaPalette />,
};

export const WritingCreative: FC = () => (
  <section
    id="writing"
    className="container-fluid py-5 animate__animated animate__fadeIn"
    style={{ backgroundColor: "#121212", color: "#f8f9fa" }}
  >
    <div className="container">
      <h2
        className="display-5 text-center mb-5 animate__animated animate__fadeInDown"
        style={{
          textDecoration: "underline",
          textDecorationColor: "#0d6efd",
          textUnderlineOffset: "10px",
        }}
      >
        Writing & Creative Works
      </h2>

      <div className="row g-4">
        {works.map((work, index) => (
          <div
            key={work.title}
            className="col-12 col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <div
              style={{
                backgroundColor: "#212529",
                borderRadius: "0.5rem",
                boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
                textAlign: "center" as const,
                padding: "1.5rem",
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
              {/* Icon in colored circle */}
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  margin: "0 auto 1rem",
                  borderRadius: "50%",
                  backgroundColor: work.iconColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  color: "#fff",
                }}
              >
                {iconMap[work.type]}
              </div>

              {/* Title */}
              <h3 className="h5 fw-bold mb-2">{work.title}</h3>

              {/* Description */}
              <p style={{ color: "#adb5bd", fontSize: "0.9rem" }}>
                {work.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WritingCreative;
