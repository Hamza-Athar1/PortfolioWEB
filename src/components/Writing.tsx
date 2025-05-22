// src/components/WritingCreative.tsx

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
    title:
      "Why Video Games Are Beneficial for Cognitive and Social Development",
    description:
      "A persuasive exploration of the cognitive, creative, and social benefits of video gaming, backed by research and examples.",
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

// Accordion sections for the essay
const essaySections = [
  {
    key: "intro",
    title: "Introduction",
    content: (
      <>
        <p>
          Video games can sharpen memory, boost problem-solving, and foster
          social connections—when played in moderation and with intention.
        </p>
      </>
    ),
  },
  {
    key: "cognitive",
    title: "Cognitive Benefits",
    content: (
      <>
        <p>
          Strategy games improve planning and resource management, action titles
          enhance hand–eye coordination and reaction time.
        </p>
      </>
    ),
  },
  {
    key: "social",
    title: "Social & Emotional Growth",
    content: (
      <>
        <p>
          Multiplayer and narrative-driven games build teamwork, empathy, and
          conflict-resolution skills.
        </p>
      </>
    ),
  },
  {
    key: "concerns",
    title: "Concerns & Moderation",
    content: (
      <>
        <p>
          Addiction risks stem from poor self-regulation—not games themselves.
          Controlled play can lower stress and improve well-being.
        </p>
      </>
    ),
  },
  {
    key: "edu",
    title: "Educational & Future Potential",
    content: (
      <>
        <p>
          Edutainment like Kerbal Space Program and Minecraft: Education Edition
          engage learners and improve retention.
        </p>
      </>
    ),
  },
  {
    key: "conclusion",
    title: "Conclusion",
    content: (
      <>
        <p>
          Embracing video games responsibly can transform them into powerful
          tools for personal growth, learning, and community building.
        </p>
      </>
    ),
  },
];

export const WritingCreative: FC = () => {
  const essayWork = works.find((w) => w.type === "essay")!;
  const otherWorks = works.filter((w) => w.type !== "essay");

  return (
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
            letterSpacing: "1px",
          }}
        >
          Writing & Creative Works
        </h2>

        <div className="text-center mb-4">
          <a
            href="/assets/essay.pdf"
            download
            className="btn btn-outline-info"
            style={{
              padding: "0.75rem 1.5rem",
              fontSize: "1rem",
              borderRadius: "0.5rem",
              transition: "background-color 0.3s ease, color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#0dcaf0";
              e.currentTarget.style.color = "#121212";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#0dcaf0";
            }}
          >
            Download Essay
          </a>
        </div>

        {/* Featured Essay Accordion */}
        <div className="mb-5" data-aos="fade-up">
          <div
            className="accordion"
            id="essayAccordion"
            style={{
              borderRadius: "0.5rem",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
            }}
          >
            <h3
              className="h4 text-white fw-bold p-3 mb-0"
              style={{
                backgroundColor: "#212529",
                textAlign: "center",
                letterSpacing: "0.5px",
              }}
            >
              {essayWork.title}
            </h3>
            {essaySections.map((sec, idx) => (
              <div
                className="accordion-item"
                key={sec.key}
                style={{
                  backgroundColor: "#212529",
                  border: "none",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.02)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <h3 className="accordion-header" id={`heading-${sec.key}`}>
                  <button
                    className={`accordion-button ${
                      idx !== 0 ? "collapsed" : ""
                    }`}
                    style={{
                      backgroundColor: "#343a40",
                      color: "#f8f9fa",
                      border: "none",
                      fontWeight: "bold",
                    }}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse-${sec.key}`}
                    aria-expanded={idx === 0}
                    aria-controls={`collapse-${sec.key}`}
                  >
                    {sec.title}
                  </button>
                </h3>
                <div
                  id={`collapse-${sec.key}`}
                  className={`accordion-collapse collapse ${
                    idx === 0 ? "show" : ""
                  }`}
                  aria-labelledby={`heading-${sec.key}`}
                  data-bs-parent="#essayAccordion"
                  style={{ maxHeight: "200px", overflowY: "auto" }}
                >
                  <div
                    className="accordion-body"
                    style={{
                      backgroundColor: "#121212",
                      color: "#e9ecef",
                      fontSize: "0.95rem",
                      lineHeight: "1.6",
                    }}
                  >
                    {sec.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Works */}
        <h3
          className="h5 text-center mb-4 animate__animated animate__fadeInDown"
          style={{ color: "#adb5bd", letterSpacing: "0.5px" }}
        >
          Additional Works
        </h3>
        <div className="row g-4">
          {otherWorks.map((work, idx) => (
            <div
              key={work.title}
              className="col-12 col-md-6 col-lg-4"
              data-aos="zoom-in"
              data-aos-delay={`${idx * 100}`}
            >
              <div
                style={{
                  backgroundColor: "#212529",
                  borderRadius: "0.5rem",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
                  textAlign: "center" as const,
                  padding: "1.5rem",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 16px rgba(0,0,0,0.7)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 12px rgba(0,0,0,0.5)";
                }}
              >
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
                <h5
                  className="fw-bold mb-2"
                  style={{ letterSpacing: "0.5px", color: "#f8f9fa" }}
                >
                  {work.title}
                </h5>
                <p
                  style={{
                    color: "#adb5bd",
                    fontSize: "0.9rem",
                    lineHeight: "1.5",
                  }}
                >
                  {work.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WritingCreative;
