"use client";
import { useState } from "react";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

const Nav = () => {
  const [activeLink, setActiveLink] = useState("about");

  const handleGoTo = (key) => {
    setActiveLink(key); // Update the active link
    const targetElement = document.getElementById(key);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <nav className="flex flex-col gap-8">
     <section>
     <h1 className="text-xl font-bold">
          <span className="text-accent block my-4">// Front End Developer</span>
          <p className="text-primary/75 text-sm w-1/2">
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
                ? "text-accent  dark:text-white dark:hover:text-white"
                : "hover:text-accent dark:hover:text-white dark:text-accent text-primary"
            }`}
          >
            // {link.label}
          </button>
        ))}
     </section>
      
      </nav>
    </div>
  );
};

export default Nav;
