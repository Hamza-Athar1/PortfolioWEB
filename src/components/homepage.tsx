import { FC, memo } from "react";
import { Link } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./componentStyles/home.css";
import "./componentStyles/layout.css";
import "animate.css/animate.min.css";
// Home / Hero Section
export const HomePage: FC = () => {
  return (
    <section
      id="home"
      className="position-relative"
      style={{ height: "100vh", overflow: "hidden" }}
    >
      <div id="parallax" className="position-absolute w-100 h-100">
        <div className="overlay position-absolute w-100 h-100 bg-dark opacity-50"></div>
        <div className="parallax-bg position-absolute w-100 h-100"></div>
      </div>

      <div className="position-relative z-1 d-flex flex-column justify-content-center align-items-center h-100 text-center text-white px-3">
        <h1 className="display-4 fw-bold" data-aos="fade-down">
          Ameer Hamza Athar
        </h1>
        <p className="lead mb-4" data-aos="fade-down" data-aos-delay="500">
          Building intuitive software solutions that empower users and drive
          innovation.
        </p>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-70}
          className="btn btn-primary btn-lg"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          View My Work
        </Link>
      </div>
    </section>
  );
};

export default memo(HomePage);
