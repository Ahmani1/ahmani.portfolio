/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { useState, useEffect } from "react";
import NavLink from "./navLink";
import Link from "next/link";
import LanguageToggle from "../locales";
import Social from "../social";
import { getTranslation } from "@/lib/hook";
import { useLayout } from "@/store/layout";
import { TbMenu2, TbX } from "react-icons/tb";

const Nav = () => {
  const [activeLink, setActiveLink] = useState("about");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
  }, [links]);

  const handleGoTo = (key: string) => {
    setActiveLink(key);
    const targetElement = document.getElementById(key);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className="md:flex hidden flex-col min-h-screen justify-between">
        <nav className="flex flex-col gap-8">
          <section>
            <div className="text-xl font-bold">
              <h1 className="text-accent block my-4 dark:text-white">
                {t.titleDev}
              </h1>
              <p className="text-primary dark:text-white text-sm">
                {t.build}
              </p>
            </div>
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
      <div className="md:hidden fixed top-0 right-0 w-full bg-secondary/95 dark:bg-primary/95 shadow-sm z-50 backdrop-blur-sm">
        <div className="flex justify-between items-center p-4">
          <Link
            href="/"
            className="text-4xl font-semibold dark:text-accent text-primary "
          >
            AE<span className="dark:text-white text-accent">.</span>
          </Link>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? t.closeMenu : t.openMenu}
            className="flex h-10 w-10 items-center justify-center rounded border border-accent text-accent transition-colors hover:bg-accent hover:text-primary"
          >
            {isMenuOpen ? <TbX className="h-6 w-6" /> : <TbMenu2 className="h-6 w-6" />}
          </button>
        </div>
        {isMenuOpen && (
          <nav id="mobile-navigation" className="border-t border-accent/20 px-4 pb-5 pt-3">
            <section className="flex flex-col gap-4">
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
            <div className="mt-5 flex items-center justify-between">
              <LanguageToggle />
              <Social />
            </div>
          </nav>
        )}
      </div>
    </>
  );
};

export default Nav;
