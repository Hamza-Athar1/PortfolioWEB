import React, { useState, ChangeEvent, FormEvent, FC } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "animate.css/animate.min.css";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const ContactMe: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you for reaching out!");
    console.log("Form data:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="container-fluid py-5 animate__animated animate__fadeInUp"
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
          Contact Me
        </h2>

        <div className="row gy-4">
          <div className="col-12 col-md-6" data-aos="fade-right">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-control bg-dark text-light border-secondary"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-control bg-dark text-light border-secondary"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control bg-dark text-light border-secondary"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>

          <div
            className="col-12 col-md-6 d-flex flex-column justify-content-center"
            data-aos="fade-left"
          >
            <div className="mb-4 text-center">
              <FaEnvelope
                size={40}
                className="mb-2"
                style={{ color: "#0d6efd" }}
              />
              <p className="mb-1">atharhamza559@gmail.com</p>
            </div>
            <div className="d-flex justify-content-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fs-2"
                style={{ transition: "transform 0.2s" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fs-2"
                style={{ transition: "transform 0.2s" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
