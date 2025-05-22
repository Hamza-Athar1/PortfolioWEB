import { memo, FC } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll"; // Import Link from react-scroll
import "./componentStyles/layout.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "animate.css/animate.min.css";

interface LayoutProps {}

const Layout: FC<LayoutProps> = () => {
  const sections: string[] = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Writing",
    "Hobbies",
    "Contact",
  ];

  const handleNavLinkClick = () => {
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse) {
      navbarCollapse.classList.remove("show");
    }
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
        data-aos="fade-down"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">
            A.H.A.
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              {sections.map((sec: string) => (
                <li className="nav-item" key={sec} data-aos="fade-in">
                  <Link
                    to={sec.toLowerCase()}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="nav-link"
                    activeClass="active"
                    onClick={handleNavLinkClick}
                  >
                    {sec}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="d-flex align-items-center">
              <a
                href="https://github.com/Hamza-Athar1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-5 me-3"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/hamza-athar-ezio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-5 me-3"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:atharhamza559@gmail.com"
                className="text-white fs-5"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <footer
        className="bg-dark text-center text-white py-3"
        data-aos="fade-up"
      >
        <div className="container">
          &copy; {new Date().getFullYear()} Ameer Hamza Athar
        </div>
      </footer>
    </>
  );
};

export default memo(Layout);
