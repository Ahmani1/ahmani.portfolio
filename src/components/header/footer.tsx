import LanguageToggle from "../locales";
import Social from "../social";

const Footer = () => (
    <footer className="flex md:hidden justify-between items-center w-full">
      <Social />
      <LanguageToggle />
    </footer>
  );

  export default Footer;
