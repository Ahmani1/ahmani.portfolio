import { TbBuildingSkyscraper } from "react-icons/tb";

interface ExperienceItemProps {
  duration: string;
  company: string;
  title: string;
  description: string[];
}

const ExperienceItem = ({ duration, company, title, description }: ExperienceItemProps) => {
  return (
    <li className="group">
      <div className="mt-3 p-4 flex gap-2 items-center md:items-start group-hover:bg-slate-700 dark:group-hover:bg-slate-800 group-hover:!opacity-100 group-hover/list:opacity-50 group-hover:rounded-md transition-all md:flex-row flex-col">
        <header className="w-full md:w-1/6 group-hover:text-accent text-xs font-semibold uppercase tracking-wide text-slate-300">
          {duration}
          <br />
          <br />
          <TbBuildingSkyscraper className="inline-block h-4 w-4 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
          <span className="ml-2">{company}</span>
        </header>

        <div className="w-full md:w-5/6">
          <h3 className="text-lg font-semibold leading-snug tracking-tight mb-1 mt-0 group-hover:text-white">
            {title}
          </h3>

          <p className="mt-2 text-sm leading-normal group-hover:text-white" dangerouslySetInnerHTML={{ __html: description.join("<br>") }} />
          
        </div>
      </div>
    </li>
  );
};
export default ExperienceItem;