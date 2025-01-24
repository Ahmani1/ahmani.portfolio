import Link from "next/link";
import Nav from "./nav";
const Header = () => {
  return (
    <header className="text-primary flex md:sticky top-0  flex-col md:mb-3 mb-0 md:h-screen h-auto w-2/6">
      <div className="flex items-start justify-between flex-col">
        <Link href="/" className="text-4xl font-semibold dark:text-accent text-primary">
          AE<span className="dark:text-white text-accent">.</span>
        </Link>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
