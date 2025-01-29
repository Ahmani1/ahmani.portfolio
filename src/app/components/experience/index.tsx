import { getTranslation } from "@/app/lib/hook";
import { localeFN } from "@/app/lib/param";
import ExperienceItem from "./ExperienceItem";

const Experience = () => {
  const lang = localeFN.get();
  const t = getTranslation(lang);

  return (
    <section id="experience" className="w-full">
      <h2 className="text-2xl font-bold mb-4">{t.experienceTitle}</h2>
      <ol className="group/list">
        <ExperienceItem
          duration={t.experience1.duration}
          company={t.experience1.company}
          title={t.experience1.title}
          description={t.experience1.description}
        />
        <ExperienceItem
          duration={t.experience2.duration}
          company={t.experience2.company}
          title={t.experience2.title}
          description={t.experience2.description}
        />
      </ol>
    </section>
  );
};

export default Experience;