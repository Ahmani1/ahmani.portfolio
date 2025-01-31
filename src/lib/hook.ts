export const translations = {
  en: {
    experienceTitle: "Experience",
    experience1: {
      title: "Frontend Developer",
      company: "Elavi.ma",
      duration: "2025 — Present",
      description: [
        "Creation and integration of HTML5, CSS3, and JavaScript",
        "Responsive design implementation",
        "Technical site auditing",
        "Email integration",
        "Development of components using React/Next.js",
        "Source code analysis and auditing",
        "Compliance verification with W3C standards",
        "Page integration in Drupal 7"
      ],
    },
    experience2: {
      title: "Frontend Developer",
      company: "Freelance",
      duration: "2021 — January",
      description: [
        "Creation and integration of HTML5, CSS3, and JavaScript ",
        "Responsive design implementation",
        "Technical site auditing",
        "Email integration",
        "Development of components using React/Next.js",
        "Source code analysis and auditing",
        "Compliance verification with W3C standards",
        "Page integration in Drupal 7"
      ],
    },
    aboutMe: "As a software development graduate, I bring energy, precision, and adaptability to every project I take on. With a strong passion for front-end development, particularly with React.js, I am always striving to enhance user experiences through clean, efficient code. My goal is to help drive the success of your business by delivering innovative solutions. I look forward to applying my skills to your team and embracing new challenges along the way.",
    projectsTitle: "Projects",
    flyerbeDescription: "An online printing e-commerce platform. Creation and integration of websites using HTML5, CSS3, JQ, and PHP5 (Drupal 7).",
    flyerfrDescription: "An online printing e-commerce platform specializing in printing services. Development and maintenance of key frontend components to improve accessibility and user experience.",
    mercuryDescription: "Development and maintenance of a custom website for Mercury Flooring, a leading provider of flooring solutions.",
  },
  fr: {
    experienceTitle: "Expérience",
    experience1: {
      title: "Développeur Frontend",
      company: "Elavi.ma",
      duration: "2025 — Présent",
      description: [
        "Création et intégration de HTML5, CSS3, et JavaScript",
        "Mise en œuvre de design responsive",
        "Audit technique du site",
        "Intégration des e-mails",
        "Développement de composants avec React/Next.js",
        "Analyse et audit du code source",
        "Vérification de la conformité aux normes W3C",
        "Intégration des pages dans Drupal 7"
      ],
    },
    experience2: {
      title: "Développeur Frontend",
      company: "Freelance",
      duration: "2021 — Janvier",
      description: [
        "Création et intégration de HTML5, CSS3, et JavaScript",
        "Mise en œuvre de design responsive",
        "Audit technique du site",
        "Intégration des e-mails",
        "Développement de composants avec React/Next.js",
        "Analyse et audit du code source",
        "Vérification de la conformité aux normes W3C",
        "Intégration des pages dans Drupal 7"
      ],
    },
    aboutMe: "En tant que diplômé en développement logiciel, j'apporte de l'énergie, de la précision et de l'adaptabilité à chaque projet que je prends en charge. Avec une forte passion pour le développement front-end, en particulier avec React.js, je m'efforce toujours d'améliorer l'expérience utilisateur grâce à un code propre et efficace. Mon objectif est de contribuer au succès de votre entreprise en offrant des solutions innovantes. J'ai hâte de mettre mes compétences au service de votre équipe et de relever de nouveaux défis.",
    projectsTitle: "Projets",
    flyerbeDescription: "Un commerce en ligne (e-Commerce) d'impression. Création et intégration de sites web en utilisant HTML5, CSS3, JQ et PHP5 (Drupal 7).",
    flyerfrDescription: "Un commerce en ligne (e-Commerce) d'impression spécialisé dans les services d'impression. Développement et maintenance des composants clés du frontend pour améliorer l'accessibilité et l'expérience utilisateur.",
    mercuryDescription: "Développement et maintenance d'un site web personnalisé pour Mercury Flooring, un fournisseur leader de solutions de revêtement de sol.",
  },
};

export function getTranslation(lang: string): typeof translations.en | typeof translations.fr {
  if (lang === 'en') {
    return translations.en;
  } else if (lang === 'fr') {
    return translations.fr;
  } else {
    console.log(`Unknown language: ${lang}`);
    return translations.en;
  }
}