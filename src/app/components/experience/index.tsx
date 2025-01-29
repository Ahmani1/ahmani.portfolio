import { getTranslation } from "@/app/lib/hook";
import { localeFN } from "@/app/lib/param";
import { TbBuildingSkyscraper } from "react-icons/tb";

const Experience = () => {
  const lang = localeFN.get();
  const t = getTranslation(lang);
  return (
    <section id="experience" className="w-full">
      <ol className="group/list">
        <li className="group">
          <div className="mt-3 p-4 flex gap-2 items-center md:items-start group-hover:bg-slate-700 dark:group-hover:bg-slate-800 group-hover:!opacity-100 group-hover/list:opacity-50 group-hover:rounded-md transition-all md:flex-row flex-col">
            <header className="w-full w-1/6 group-hover:text-accent text-xs font-semibold uppercase tracking-wide text-slate-300 ">
              {t.experience1.duration}
              <br />
              <br />
              <TbBuildingSkyscraper className="inline-block h-4 w-4 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
              <span className="ml-2">{t.experience1.company}</span>
            </header>

            <div className="w-full md:w-5/6">
              <h3 className="text-lg font-semibold leading-snug tracking-tight mb-1 mt-0 group-hover:text-white">
                {t.experience1.title}
              </h3>

              <p className="mt-2 text-sm leading-normal group-hover:text-white">
                {t.experience1.description }
              </p>
            </div>
          </div>
        </li>
        <li className="group">
          <div className="mt-3 p-4 flex gap-2 items-center md:items-start group-hover:bg-slate-700 dark:group-hover:bg-slate-800 group-hover:!opacity-100 group-hover/list:opacity-50 group-hover:rounded-md transition-all md:flex-row flex-col">
            <header className="group-hover:text-slate-300 text-xs font-semibold uppercase tracking-wide text-slate-300 ">
              {t.experience2.duration}
              <br />
              <br />
              <span className="flex items-center"></span>
              <TbBuildingSkyscraper className="inline-block h-4 w-4 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
              <span className="ml-2">{t.experience2.company}</span>
            </header>

            <div className="w-full">
            <h3 className="text-lg font-semibold leading-snug tracking-tight mb-1 mt-0 group-hover:text-white">
              {t.experience2.title}
            </h3>

            <p className="mt-2 text-sm leading-normal group-hover:text-white">
              {t.experience2.description}
            </p>
            </div>
          </div>
        </li>
      </ol>
    </section>
  );
};

export default Experience;
