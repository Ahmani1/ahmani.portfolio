"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import ThemeToggle from "../themeToggle";
import { getTranslation } from "@/lib/hook";
import { useLayout } from "@/store/layout";
const Social = () => {
  const { locale } = useLayout();
  const t = getTranslation(locale as Locales);
  return (
    <section className="flex gap-4 items-center">
      <Link
        href="https://www.linkedin.com/in/ahmani-elmokhtar-990835361/"
        target="_blank"
        className="text-primary dark:text-accent hover:text-accent transition-all dark:hover:text-white"
        aria-label={t.linkedinProfile}
      >
        <FaLinkedin size={24} />
      </Link>
      <Link
        href="https://github.com/Ahmani1"
        target="_blank"
        className="text-primary dark:text-accent hover:text-accent transition-all dark:hover:text-white"
        aria-label={t.githubProfile}
      >
        <FaGithub size={24} />
      </Link>

      <ThemeToggle />
    </section>
  );
};
export default Social;
