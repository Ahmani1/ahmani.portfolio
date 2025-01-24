const Experience = () => {
  return (
    <section id="experience" className="h-auto">
      <ol className="group/list">
        <li className="mb-12">
          <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-700  dark:lg:group-hover:bg-slate-800  lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

            <header className="z-10 mb-2 mt-1 group-hover:text-slate-300 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2025 to Present">
              2025 — Present <br />
              <br />
              <span>Elavi.ma</span>
            </header>
          

            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-accent dark:text-white">
                Frontend Developer
              </h3>
              <p className="mt-2 text-sm leading-normal group-hover:text-white ">
                Creation and integration of HTML5,CSS3, and JavaScript <br />
                Responsive design implementation <br />
                Technical site auditing <br />
                Email integration <br />
                Development of components using React/Next.js <br />
                Source code analysis and auditing <br />
                Compliance verification with W3C standards <br />
                Page integration in Drupal
              </p>
            </div>
          </div>
        </li>

        <li className="mb-12">
          <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-700  dark:lg:group-hover:bg-slate-800  lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

            <header className="z-10 mb-2 mt-1 group-hover:text-slate-300 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2025 to Present">
              January 2021
              <br />
              <br />
              <span>Freelance</span>
            </header>

            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-accent dark:text-white">
                Frontend Developer
                <span className="inline-flex items-baseline ml-1">
                  N&rsquo;SPIRATION COACHING
                </span>
              </h3>
              <p className="mt-2 text-sm leading-normal group-hover:text-white">
                Created a WordPress website<br />
                Optimized and customized the initial theme <br />
                Improved loading speed (compression of JS and CSS)<br />
                Created new content pages<br />
                Developed new sections and categories as per client requests<br />
                Conducted SEO audit on the old site, source code analysis <br />
                Contributed to the website&rsquo;s natural SEO
              </p>
            </div>

          </div>
        </li>

      </ol>
    </section>
  );
};

export default Experience;
