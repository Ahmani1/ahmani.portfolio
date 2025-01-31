"use client";

import { useRouter } from "next/navigation";

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
        <button
          onClick={() => switchLanguage("en")}
          aria-label="Switch to English"
          className={`flex items-center gap-2 rounded-md transition-all duration-300 ${
            lang === "en"
              ? "text-accent dark:text-white font-bold underline"
              : "text-gray-500 hover:text-accent"
          }`}
        >
          <span>EN</span>
        </button>

        <button
          onClick={() => switchLanguage("fr")}
          aria-label="Switch to French"
          className={`flex items-center gap-2 rounded-md transition-all duration-300 ${
            lang === "fr"
              ? "text-accent dark:text-white font-bold underline"
              : "text-gray-500 hover:text-accent"
          }`}
        >
          <span>FR</span>
        </button>
      </div>
    </>
  );
}