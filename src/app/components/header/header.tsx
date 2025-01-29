import Link from "next/link";
import Nav from "./nav";
import { localeFN } from "@/app/lib/param";
import LanguageToggle from "../lang";
const Header = () => {
  return (
    <header className="text-primary flex md:sticky top-0  flex-col md:mb-3 mb-0 md:h-screen h-auto md:w-2/6 w-full">
      <div className="flex items-start justify-between flex-col">
        <Link
          href="/"
          className="text-4xl font-semibold dark:text-accent text-primary md:block hidden"
        >
          AE<span className="dark:text-white text-accent">.</span>
        </Link>

        <Nav />
        <LanguageToggle lang={localeFN.get()} />
      </div>
    </header>
  );
};

export default Header;
