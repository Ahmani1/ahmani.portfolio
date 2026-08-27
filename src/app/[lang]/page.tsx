import { Metadata } from "next";
import Profile from "@/components/profile";
import Projects from "@/components/projects";
import Experience from "@/components/experience";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locales }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isFrench = lang === "fr";
  const canonicalUrl = `https://ahmani-elmokhtar.vercel.app/${lang}`;

  return {
    title: isFrench
      ? "Ahmani Elmokhtar | Développeur Frontend et Ingénieur Logiciel"
      : "Ahmani Elmokhtar | Frontend Developer & Software Engineer",
    description: isFrench
      ? "Portfolio d'Ahmani Elmokhtar, développeur frontend et ingénieur logiciel spécialisé en Next.js, React, TypeScript et applications web modernes."
      : "Portfolio of Ahmani Elmokhtar, Frontend Developer and Software Engineer specializing in Next.js, React, TypeScript and modern web applications.",
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: "https://ahmani-elmokhtar.vercel.app/en",
        fr: "https://ahmani-elmokhtar.vercel.app/fr",
      },
    },
    authors: [{ name: "Ahmani Elmokhtar" }],
    creator: "Ahmani Elmokhtar",
    publisher: "Ahmani Elmokhtar",
    robots: {
      index: true,
      follow: true,
    },
    keywords: [
      "Ahmani Elmokhtar",
      "software developer",
      "frontend developer",
      "software engineer",
      "Next.js",
      "React",
      "TypeScript",
      "web applications",
    ],
    openGraph: {
      title: isFrench
        ? "Ahmani Elmokhtar | Développeur Frontend et Ingénieur Logiciel"
        : "Ahmani Elmokhtar | Frontend Developer & Software Engineer",
      description: isFrench
        ? "Portfolio d'Ahmani Elmokhtar spécialisé en applications web modernes avec Next.js, React et TypeScript."
        : "Portfolio of Ahmani Elmokhtar specializing in modern web applications with Next.js, React and TypeScript.",
      url: canonicalUrl,
      siteName: "Ahmani Elmokhtar Portfolio",
      type: "website",
      locale: isFrench ? "fr_FR" : "en_US",
      alternateLocale: isFrench ? ["en_US"] : ["fr_FR"],
    },
    twitter: {
      card: "summary",
      title: isFrench
        ? "Ahmani Elmokhtar | Développeur Frontend et Ingénieur Logiciel"
        : "Ahmani Elmokhtar | Frontend Developer & Software Engineer",
      description: isFrench
        ? "Portfolio d'Ahmani Elmokhtar spécialisé en applications web modernes avec Next.js, React et TypeScript."
        : "Portfolio of Ahmani Elmokhtar specializing in modern web applications with Next.js, React and TypeScript.",
    },
  };
}

const Home = async () => {

  return (
    <section className="flex flex-col gap-14 items-center text-center md:pt-0 md:text-left">
      <div
        id="about"
        className="xl:text-left text-primary/75 text-justify text-base md:pt-0 pt-12"
      >
        <article>
          <Profile />
        </article>
      </div>
      <Experience />
      <Projects />
    </section>
  );
};

export default Home;