import { TbExternalLink } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";
interface ProjectItemProps {
    company: string;
    subtitle?: string;
    description: string;
    technologies: string[];
    technologiesLabel: string;
    link: string;
    image: string;
    featured?: boolean;
    details?: {
      overview: string;
      challenge: string;
      contribution: string[];
      highlights: string[];
      architecture: { name: string; description: string }[];
      labels: {
        details: string;
        overview: string;
        challenge: string;
        contribution: string;
        highlights: string;
        architecture: string;
        technologies: string;
      };
    };
}
const TechnologyChip = ({ tech }: { tech: string }) => (
    <div className="inlone-flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-accent dark:text-white">
      {tech}
    </div>
  );
const ProjectItem = ({ company, subtitle, description, technologies, technologiesLabel, link, image, featured, details }: ProjectItemProps) => (
    <li className={`group ${featured ? "md:mb-8" : ""}`}>
      <div className={`mt-3 p-4 flex gap-5 items-center md:items-start group-hover:bg-slate-700 dark:group-hover:bg-slate-800 group-hover:!opacity-100 group-hover/list:opacity-50 group-hover:rounded-md transition-all md:flex-row flex-col ${featured ? "border border-accent/40 bg-primary/[0.03] dark:bg-white/[0.03]" : ""}`}>
        <header className="group-hover:text-slate-300 text-xs font-semibold uppercase tracking-wide text-slate-300 w-full md:w-2/5 shrink-0">
          <Image
            src={image}
            width={300}
            height={300}
            alt={`${company} project screenshot`}
            className="w-full aspect-[16/10] object-cover rounded-sm md:group-hover:rounded-md transition-all"
          />
        </header>
  
        <div className="w-full">
          <Link href={link} target="_blank" rel="noreferrer" className="inline-flex items-baseline font-medium text-accent dark:text-white hover:text-teal-300 group/link text-base">
            <span className="flex items-center">
              {company}
              <TbExternalLink className="inline-block h-4 w-4 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
            </span>
          </Link>

          {subtitle && <p className="mt-1 text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{subtitle}</p>}
  
          <p className="mt-2 text-sm leading-normal group-hover:text-white">
            {description}
          </p>
  
          <section className="mt-4 flex gap-3 flex-wrap group-hover:text-white justify-center md:justify-start " aria-label={technologiesLabel}>
            {technologies.map((tech) => (
              <TechnologyChip key={tech} tech={tech} />
            ))}
          </section>

          {details && (
            <details className="mt-5 border-t border-accent/20 pt-3 text-sm">
              <summary className="cursor-pointer font-medium text-accent hover:text-teal-300">{details.labels.details}</summary>
              <div className="mt-4 space-y-5 leading-relaxed">
                <div>
                  <h3 className="font-bold text-accent">{details.labels.overview}</h3>
                  <p className="mt-1">{details.overview}</p>
                </div>
                <div>
                  <h3 className="font-bold text-accent">{details.labels.challenge}</h3>
                  <p className="mt-1">{details.challenge}</p>
                </div>
                <div>
                  <h3 className="font-bold text-accent">{details.labels.contribution}</h3>
                  <ul className="mt-1 list-inside list-disc">
                    {details.contribution.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-accent">{details.labels.highlights}</h3>
                  <ul className="mt-1 list-inside list-disc">
                    {details.highlights.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-accent">{details.labels.architecture}</h3>
                  <div className="mt-2 grid gap-2 sm:grid-cols-2">
                    {details.architecture.map((item) => (
                      <div key={item.name} className="border-l-2 border-accent/50 pl-3">
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-xs">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </details>
          )}
        </div>
      </div>
    </li>
  );
  export default ProjectItem;