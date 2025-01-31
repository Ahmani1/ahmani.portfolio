import Link from "next/link";
import Nav from "./nav";

const Header = async () => {
  return (
    <header className="text-primary flex md:sticky top-0  flex-col md:mb-3 mb-0 md:h-screen h-auto md:w-2/6 w-full">
      <div className="flex items-start justify-between flex-col">
        <div className="flex gap-2 w-full justify-between items-center">
          <Link
            href="/"
            className="text-4xl font-semibold dark:text-accent text-primary md:block hidden"
          >
            AE<span className="dark:text-white text-accent">.</span>
          </Link>
        </div>

        <Nav />
      </div>
    </header>
  );
};

export default Header;
