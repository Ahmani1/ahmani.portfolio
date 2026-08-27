import { localeFN } from "@/lib/param";
import ProjectItem from "./projectItem";
import { getTranslation } from "@/lib/hook";

export default async function Projects() {
  const lang = await localeFN.get();
  const t = getTranslation(lang);
  const projects = [
    {
      image: "/design-tools.png",
      company: "PrintPilot",
      subtitle: t.printPilotSubtitle,
      description: t.printPilotShort,
      technologies: ["Next.js", "React", "TypeScript", "Konva", "Tailwind CSS"],
      technologiesLabel: t.technologiesLabel,
      link: "https://print.batteria.be/",
      featured: true,
      details: {
        overview: t.printPilotOverview,
        challenge: t.printPilotChallenge,
        contribution: t.printPilotContribution,
        highlights: t.printPilotHighlights,
        architecture: t.printPilotArchitecture,
        labels: t.printPilotLabels,
      },
    },
    {
      image: "/flyerbe.png",
      company: "batteria.be",
      subtitle: t.batteriaSubtitle,
      description: t.batteriaShort,
      technologies: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "REST APIs"],
      technologiesLabel: t.technologiesLabel,
      link: "https://www.batteria.be/",
      details: {
        overview: t.batteriaOverview,
        challenge: t.batteriaChallenge,
        contribution: t.batteriaContribution,
        highlights: t.batteriaHighlights,
        architecture: t.batteriaArchitecture,
        labels: t.batteriaLabels,
      },
    },
    {
      image: "/mercury.png",
      company: "Mercuryflooring.com",
      description: getTranslation(lang).mercuryDescription,
      technologies: ["Next.js", "TailwindCSS", "Typescript"],
      technologiesLabel: t.technologiesLabel,
      link: "https://printonline.mercuryflooring.com/en",
    },
  ];

  return (
    <section id="projects">
      <h2 className="text-2xl font-bold mb-4">{t.projectsTitle}</h2>
      <ol className="group/list">
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </ol>
    </section>
  );
}