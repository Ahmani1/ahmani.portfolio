/* eslint-disable react/jsx-no-comment-textnodes */
import { Metadata } from "next";
import { localeFN } from "@/lib/param";
import Profile from "@/components/profile";
import { getTranslation } from "@/lib/hook";
import Projects from "@/components/projects";
import Experience from "@/components/experience";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "AHMANI ELMOKHTAR",
    description:
      "Welcome to my personal portfolio showcasing my skills and experiences.",
    keywords: [
      "software developer",
      "portfolio",
      "web developer",
      "frontend",
      "backend",
    ],
    openGraph: {
      title: "Home - Portfolio",
      description:
        "A showcase of my work, skills, and experiences as a software developer.",
      url: "https://ahmani-elmokhtar.vercel.app/",
    },
  };
}

const Home = async () => {
  const lang = await localeFN.get();
  const t = getTranslation(lang);

  return (
    <section className="flex flex-col gap-14 items-center text-center md:text-left">
      <div
        id="about"
        className="xl:text-left text-primary/75 text-justify text-base md:pt-0 pt-12"
      >
        <article>
          <Profile />
          <p className="text-center md:text-left">
            <h1 className="text-xl font-bold ">
              <span className="dark:text-white text-accent">// AHMANI </span>{" "}
              ELMOKHTAR //
            </h1>
            {t.aboutMe}
          </p>
        </article>
      </div>
      <Experience />
      <Projects />
    </section>
  );
};

export default Home;