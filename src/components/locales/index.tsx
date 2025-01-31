"use client";

import { useLayout } from "@/store/layout";
import { useRouter } from "next/navigation";

export default function LanguageToggle() {
  const router = useRouter();
  const {locale} = useLayout();  

  const switchLanguage = (newLang: string) => {
    if (newLang !== locale) {
      router.push(`/${newLang}`);
      router.refresh();

    }
  };

  return (
    <>
      <div className="flex gap-4 items-center">
        <button
          onClick={() => switchLanguage("en")}
          aria-label="Switch to English"
          className={`block ${
            locale === "en"
              ? "text-primary dark:!text-accent font-bold underline "
              : "text-gray-500 hover:text-accent"
          }`}
        >
          EN
        </button>

        <button
          onClick={() => switchLanguage("fr")}
          aria-label="Switch to French"
          className={`block ${
            locale === "fr"
              ? "text-primary dark:!text-accent font-bold underline"
              : "text-gray-500 hover:text-accent"
          }`}
        >
         FR
        </button>
      </div>
    </>
  );
}