/* eslint-disable react/jsx-no-comment-textnodes */
import Experience from "./components/experience";
import Profile from "./components/profile/index";
import { Metadata } from "next";
import Projects from "./components/projects";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Home",
    description: "Welcome to my personal portfolio showcasing my skills and experiences.",
    keywords: ["software developer", "portfolio", "web developer", "frontend", "backend"],
    openGraph: {
      title: "Home - Portfolio",
      description: "A showcase of my work, skills, and experiences as a software developer.",
      url: "https://example.com",
    },
  };
}

const Home = () => {
  return (
      <section className="flex flex-col gap-14 items-center text-center md:text-left">
        <div id="about" className="xl:text-left text-primary/75 text-justify text-base md:pt-0 pt-12">
          <article>
            <Profile />
           <p className="text-center md:text-left">
            <h1 className="text-xl font-bold "><span className="dark:text-white text-accent">// AHMANI </span> ELMOKHTAR //</h1>
            As a software development graduate, I bring energy, precision, and adaptability to every project I take on. With a strong passion for front-end development, particularly with React.js, I am always striving to enhance user experiences through clean, efficient code. My goal is to help drive the success of your business by delivering innovative solutions. I look forward to applying my skills to your team and embracing new challenges along the way.</p>
          </article>
        </div>

        <Experience />

        <Projects />
      </section>
  );
};

export default Home;
