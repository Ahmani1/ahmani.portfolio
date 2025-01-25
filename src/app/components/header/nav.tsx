/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

const Nav = () => {
  const [activeLink, setActiveLink] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    links.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleGoTo = (key: string) => {
    setActiveLink(key);
    const targetElement = document.getElementById(key);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div className="md:flex hidden flex-col min-h-screen justify-between">
        <nav className="flex flex-col gap-8">
          <section>
            <h1 className="text-xl font-bold">
              <span className="text-accent block my-4 dark:text-white">
                // Front End Developer
              </span>
              <p className="text-primary dark:text-white text-sm">
                Build accessible, pixel-perfect digital experiences for the web.
              </p>
            </h1>
          </section>

          <section className="flex gap-4 flex-row flex-col">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleGoTo(link.id)}
                className={`capitalize font-medium transition-all w-fit ${
                  activeLink === link.id
                    ? "text-accent dark:text-white dark:hover:text-white"
                    : "hover:text-accent dark:hover:text-white dark:text-accent text-primary"
                }`}
              >
                // {link.label}
              </button>
            ))}
          </section>

          <section className="flex gap-4 mt-6">
            <Link
              href="https://www.linkedin.com/in/your-profile/"
              target="_blank"
              className="text-primary dark:text-accent hover:text-accent transition-all"
            >
              <FaLinkedin size={24} />
            </Link>
            <Link
              href="https://github.com/your-username/"
              target="_blank"
              className="text-primary dark:text-accent hover:text-accent transition-all"
            >
              <FaGithub size={24} />
            </Link>
          </section>
        </nav>
      </div>

      {/* Mobile Navigation Bar */}
      <div className="md:hidden fixed top-0 right-0 w-full  text-white z-50 bg-flow-transparent bg-cover bg-no-repeat bg-fixed">
        <div className="flex justify-between items-center p-4">
          <section className="flex flex-col gap-4 text-right">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleGoTo(link.id)}
                className={`capitalize font-medium transition-all w-fit ${
                  activeLink === link.id
                    ? "text-accent dark:text-white dark:hover:text-white"
                    : "hover:text-accent dark:hover:text-white dark:text-accent text-primary"
                }`}
                style={{ display: activeLink === link.id ? "block" : "none" }} // Conditionally show/hide links
              >
                // {link.label}
              </button>
            ))}

           
          </section>
        </div>
      </div>
    </>
  );
};

export default Nav;
