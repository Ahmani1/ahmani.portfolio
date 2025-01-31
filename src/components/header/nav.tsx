
"use client";

import { useState, useEffect } from "react";
import NavLink from "./navLink";
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
                Front End Developer
              </span>
              <p className="text-primary dark:text-white text-sm">
                Build accessible, pixel-perfect digital experiences for the web.
              </p>
            </h1>
          </section>

          <section className="flex gap-4 flex-row flex-col">
            {links.map((link) => (
              <NavLink
                key={link.id}
                id={link.id}
                label={link.label}
                activeLink={activeLink}
                onClick={handleGoTo}
              />
            ))}
          </section>
        </nav>
        <section className="flex gap-4 mt-6">
          <Link
            href="https://www.linkedin.com/in/ahmani-el-mokhtar-b14107206/"
            target="_blank"
            className="text-primary dark:text-accent hover:text-accent transition-all dark:hover:text-white"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={24} />
          </Link>
          <Link
            href="https://github.com/Ahmani1"
            target="_blank"
            className="text-primary dark:text-accent hover:text-accent transition-all dark:hover:text-white"
            aria-label="GitHub Profile"
          >
            <FaGithub size={24} />
          </Link>
        </section>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-0 right-0 w-full bg-transparent dark:bg-slate-800 shadow-sm z-50 ">
        <div className="flex justify-between p-4">
          <Link
            href="/"
            className="text-4xl font-semibold dark:text-accent text-primary "
          >
            AE<span className="dark:text-white text-accent">.</span>
          </Link>
          <section className="flex gap-4">
            {links.map((link) => (
              <NavLink
                key={link.id}
                id={link.id}
                label={link.label}
                activeLink={activeLink}
                onClick={handleGoTo}
              />
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default Nav;
