import { TbExternalLink } from "react-icons/tb";

const TechnologyChip = ({ tech }: { tech: string }) => (
  <div className="inlone-flex  items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-accent dark:text-white">
    {tech}
  </div>
);

const ProjectItem = ({ title, company, description, technologies, link }: { title?: string, company: string, description: string, technologies: string[], link: string }) => (
  <li className="group mb-12">
    <div className="relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 md:hover:!opacity-100 md:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none md:-inset-x-6 md:block md:group-hover:bg-slate-700 dark:md:group-hover:bg-slate-800 md:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] md:group-hover:drop-shadow-md" />
      
      <header className="z-10 mb-2 mt-1 group-hover:text-slate-300 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
        {company}
      </header>

      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-accent dark:text-white">
          <a href={link} target="_blank" className="inline-flex items-baseline font-medium text-accent dark:text-white hover:text-teal-300 group/link text-base">
            {title}
            <span className="inline-flex items-baseline ml-1">
              {company}
              <TbExternalLink className="inline-block h-4 w-4 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
            </span>
          </a>
        </h3>

        <p className="mt-2 text-sm leading-normal group-hover:text-white">
          {description}
        </p>

        <section className="mt-4 flex gap-3 flex-wrap" aria-label="Technologies">
          {technologies.map((tech) => (
            <TechnologyChip key={tech} tech={tech} />
          ))}
        </section>
      </div>
    </div>
  </li>
);

const Projects = () => {
  return (
    <section id="projects">
      <ol className="group/list">
        <ProjectItem
          company="Flyer.fr"
          description="Un commerce en ligne (e-Commerce) d'impression spécialisé dans les services d'impression. Développement et maintenance des composants clés du frontend pour améliorer l'accessibilité et l'expérience utilisateur."
          technologies={["Next.js", "TailwindCSS", "Typescript"]}
          link="https://www.flyer.fr/"
        />

        <ProjectItem
          company="Flyer.be"
          description="Un commerce en ligne (e-Commerce) d'impression. Création et intégration de sites web en utilisant HTML5, CSS3, JQ et PHP5 (Drupal 7)."
          technologies={["HTML5", "CSS3", "JQ", "PHP5", "Drupal7"]}
          link="https://www.flyer.be/"
        />

        <ProjectItem
          company="Mercuryflooring.com"
          description="Development and maintenance of a custom website for Mercury Flooring, a leading provider of flooring solutions."
          technologies={["HTML", "CSS", "JavaScript"]}
          link="https://www.mercuryflooring.com/"
        />
      </ol>
    </section>
  );
};

export default Projects;
