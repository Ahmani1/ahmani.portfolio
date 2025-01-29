/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function LanguageToggle({ lang }: { lang: string }) {
  const router = useRouter();

  const switchLanguage = (newLang: string) => {
    if (newLang !== lang) {
      router.push(`/${newLang}`);
    }
  };

  return (
    <>
      <div className="flex gap-4 mb-4 items-center">
        {/* English Button */}
        <button
          onClick={() => switchLanguage("en")}
          aria-label="Switch to English"
          className={`flex items-center gap-2  rounded-md transition-all duration-300 ${
            lang === "en"
              ? "text-accent dark:text-white font-bold underline"
              : "text-gray-500 hover:text-accent"
          }`}
        >
          // <span>EN</span>
        </button>

        {/* French Button */}
        <button
          onClick={() => switchLanguage("fr")}
          aria-label="Switch to French"
          className={`flex items-center gap-2 rounded-md transition-all duration-300 ${
            lang === "fr"
              ? "text-accent dark:text-white font-bold underline"
              : "text-gray-500 hover:text-accent"
          }`}
        >
        // <span>FR</span>
        </button>
      </div>
      <section className="flex gap-4 mt-6">
        <Link
          href="https://www.linkedin.com/in/ahmani-el-mokhtar-b14107206/"
          target="_blank"
          className="text-primary dark:text-accent hover:text-accent transition-all dark:hover:text-white "
        >
          <FaLinkedin size={24} />
        </Link>
        <Link
          href="https://github.com/Ahmani1"
          target="_blank"
          className="text-primary dark:text-accent hover:text-accent transition-all dark:hover:text-white "
        >
          <FaGithub size={24} />
        </Link>
      </section>
    </>
  );
}
