import { FC } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";

export const AboutMe: FC = () => (
  <section
    id="about"
    className="container-fluid py-5"
    style={{ backgroundColor: "#121212", color: "#f8f9fa" }}
  >
    <div className="container">
      <h2
        className="mb-5 display-5 text-center"
        style={{
          textDecoration: "underline",
          textDecorationColor: "yellow",
          textUnderlineOffset: "10px",
        }}
      >
        About Me
      </h2>

      <div className="row gy-4">
        <div className="col-md-6" data-aos="fade-right">
          <div className="mb-4">
            <h3 className="h4 mb-2">📖 Brief Biography</h3>
            <p className="lead">
              Hello! I’m <strong>Ameer Hamza Athar</strong>, a Computer Science
              student at Bahria University. Ever since I wrote my first “Hello
              World” in C++, I’ve been driven by a passion for problem-solving
              and building tools that make people’s lives easier.
            </p>
          </div>

          <div className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">
            <h3 className="h4 mb-2">🎓 Academic Background</h3>
            <ul
              className="lead"
              style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}
            >
              <li>
                B.Sc. in Computer Science — Bahria University (2022 – present)
              </li>
              <li>
                High School: A-Levels, Maths & Computer Science — [Your School]
              </li>
              <li>
                Relevant Coursework: Data Structures, Algorithms, Database
                Systems, Software Engineering
              </li>
            </ul>
          </div>
        </div>

        <div className="col-md-6" data-aos="fade-left">
          <div className="mb-4">
            <h3 className="h4 mb-2">💡 Technical & Soft Skills</h3>
            <ul
              className="lead"
              style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}
            >
              <li>
                <strong>Technical:</strong> C++, Java, Python, SQL, React, Qt,
                Blender, Git, Linux
              </li>
              <li>
                <strong>Soft:</strong> Communication, Teamwork, Critical
                Thinking, Problem-Solving, Time Management
              </li>
            </ul>
          </div>

          <div>
            <h3 className="h4 mb-2">🚀 Career Goals</h3>
            <p className="lead">
              I aim to become a full-stack software engineer, building scalable
              web applications and system-level tools. Long-term, I’m excited to
              contribute to open-source projects and mentor the next generation
              of developers.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMe;
