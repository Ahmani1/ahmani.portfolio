import { TbExternalLink } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";
interface ProjectItemProps {
    company: string;
    description: string;
    technologies: string[];
    link: string;
    image: string;
}
const TechnologyChip = ({ tech }: { tech: string }) => (
    <div className="inlone-flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-accent dark:text-white">
      {tech}
    </div>
  );
const ProjectItem = ({ company, description, technologies, link, image }: ProjectItemProps) => (
    <li className="group">
      <div className="mt-3 p-4 flex gap-2 items-center md:items-start group-hover:bg-slate-700 dark:group-hover:bg-slate-800 group-hover:!opacity-100 group-hover/list:opacity-50 group-hover:rounded-md transition-all md:flex-row flex-col">
        <header className="group-hover:text-slate-300 text-xs font-semibold uppercase tracking-wide text-slate-300 ">
          <Image
            src={image}
            width={300}
            height={300}
            alt='the image of the project'
            className="w-full h-full object-fill rounded-sm md:group-hover:rounded-md transition-all"
          />
        </header>
  
        <div className="w-full">
          <Link href={link} target="_blank" className="inline-flex items-baseline font-medium text-accent dark:text-white hover:text-teal-300 group/link text-base">
            <span className="flex items-center">
              {company}
              <TbExternalLink className="inline-block h-4 w-4 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
            </span>
          </Link>
  
          <p className="mt-2 text-sm leading-normal group-hover:text-white">
            {description}
          </p>
  
          <section className="mt-4 flex gap-3 flex-wrap group-hover:text-white justify-center md:justify-start " aria-label="Technologies">
            {technologies.map((tech) => (
              <TechnologyChip key={tech} tech={tech} />
            ))}
          </section>
        </div>
      </div>
    </li>
  );
  export default ProjectItem;