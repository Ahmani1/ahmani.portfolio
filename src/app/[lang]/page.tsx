/* eslint-disable react/jsx-no-comment-textnodes */
import { Metadata } from "next";
import Profile from "@/components/profile";
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

  return (
    <section className="flex flex-col gap-14 items-center text-center md:text-left">
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