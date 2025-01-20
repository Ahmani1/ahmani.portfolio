import { RiLink } from "react-icons/ri";

const TechnologyChip = ({ tech }: { tech: string }) => (
  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-accent dark:text-white">
    {tech}
  </div>
);

const Experience = () => {
  return (
    <section id="experience" className="h-auto flex items-center justify-center">
      <ol className="group">
        <li className="mb-12">
          <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-700  dark:lg:group-hover:bg-slate-800  lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

            <header className="z-10 mb-2 mt-1 group-hover:text-slate-300 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2025 to Present">
              2025 — Present
            </header>

            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-accent dark:text-white">
                <a
                  href="https://www.flyer.fr/"
                  target="_blank"
                  className="inline-flex items-baseline font-medium text-accent dark:text-white hover:text-teal-300 group/link text-base"
                >
                  Frontend Developer, Accessibility
                  <span className="inline-flex items-baseline ml-1">
                    Flyer.fr
                    <RiLink className="inline-block h-4 w-4 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                  </span>
                </a>
              </h3>

              <p className="mt-2 text-sm leading-normal group-hover:text-white ">
                Spearheaded the development and maintenance of key frontend components for
                Flyer.fr, a leading e-commerce platform specializing in print services.
                Collaborated closely with design and product teams to enhance accessibility,
                optimize user experience, and ensure a seamless integration of complex print
                workflows across the platform.
              </p>

              <section className="mt-4 flex flex-wrap" aria-label="Technologies">
                {["JavaScript", "TypeScript", "React", "Next.js"].map((tech) => (
                  <TechnologyChip key={tech} tech={tech} />
                ))}
              </section>
            </div>

          </div>
        </li>
      </ol>
    </section>
  );
};

export default Experience;
