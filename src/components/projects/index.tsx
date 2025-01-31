import { localeFN } from "@/lib/param";
import ProjectItem from "./projectItem";
import { getTranslation } from "@/lib/hook";

export default async function Projects() {
  const lang = await localeFN.get();
  const projects = [
    {
      image: "/flyerbe.png",
      company: "Flyer.be",
      description: getTranslation(lang).flyerbeDescription,
      technologies: ["HTML5", "CSS3", "JQ", "PHP5", "Drupal7"],
      link: "https://www.flyer.be/",
    },
    {
      image: "/flyerfr.png",
      company: "Flyer.fr",
      description: getTranslation(lang).flyerfrDescription,
      technologies: ["Next.js", "TailwindCSS", "Typescript"],
      link: "https://www.flyer.fr/",
    },
    {
      image: "/mercury.png",
      company: "Mercuryflooring.com",
      description: getTranslation(lang).mercuryDescription,
      technologies: ["Next.js", "TailwindCSS", "Typescript"],
      link: "https://printonline.mercuryflooring.com/en",
    },
  ];

  return (
    <section id="projects">
      <h2 className="text-2xl font-bold mb-4">{getTranslation(lang).projectsTitle}</h2>
      <ol className="group/list">
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </ol>
    </section>
  );
}