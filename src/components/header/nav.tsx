/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { useState, useEffect } from "react";
import NavLink from "./navLink";
import Link from "next/link";
import LanguageToggle from "../locales";
import Social from "../social";
import { getTranslation } from "@/lib/hook";
import { useLayout } from "@/store/layout";

const Nav = () => {
  const [activeLink, setActiveLink] = useState("about");
  const {locale} = useLayout();
  const t = getTranslation(locale as Locales);
 
  const links = [
    { id: "about", label: t.aboutTitle },
    { id: "experience", label: t.experienceTitle },
    { id: "projects", label: t.projectsTitle },
  ];
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
      {/* Desktop Navigation */}
      <div className="md:flex hidden flex-col min-h-screen justify-between">
        <nav className="flex flex-col gap-8">
          <section>
            <h1 className="text-xl font-bold">
              <span className="text-accent block my-4 dark:text-white">
                {t.titleDev}
              </span>
              <p className="text-primary dark:text-white text-sm">
                {t.build}
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
        <LanguageToggle />
        <Social />
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
