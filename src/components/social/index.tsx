import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import ThemeToggle from "../themeToggle";
const Social = () => {
  return (
    <section className="flex gap-4 items-center">
      <Link
        href="https://www.linkedin.com/in/ahmani-el-mokhtar-b14107206/"
        target="_blank"
        className="text-primary dark:text-accent hover:text-accent transition-all dark:hover:text-white"
        aria-label="LinkedIn Profile"
      >
        <FaLinkedin size={24} />
      </Link>
      <Link
        href="https://github.com/Ahmani1"
        target="_blank"
        className="text-primary dark:text-accent hover:text-accent transition-all dark:hover:text-white"
        aria-label="GitHub Profile"
      >
        <FaGithub size={24} />
      </Link>

      <ThemeToggle />
    </section>
  );
};
export default Social;
