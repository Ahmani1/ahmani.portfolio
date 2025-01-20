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
    <>
      <main id="about" className="flex flex-col gap-6 items-center w-full">
        <header className="flex flex-col-reverse md:flex-row items-start gap-6 w-full">
          <article className="text-center xl:text-left flex flex-col gap-4 max-w-lg">
            <h1 className="text-4xl font-bold">Welcome!</h1>
            <p className="text-primary/75 text-justify">
                <Profile />

              As a software development graduate, I bring energy, precision, and adaptability to every project I take on. With a strong passion for front-end development, particularly with React.js, I am always striving to enhance user experiences through clean, efficient code. My goal is to help drive the success of your business by delivering innovative solutions. I look forward to applying my skills to your team and embracing new challenges along the way.
            </p>

            <section className="flex gap-4">
            </section>
          </article>
        </header>

        <Experience />
        <Projects />
      </main>
    </>
  );
};

export default Home;
