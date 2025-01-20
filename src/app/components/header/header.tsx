import Link from "next/link";
import Nav from "./nav";
const Header = () => {
  return (
    <header className="w-full   text-primary flex md:sticky top-0  flex-col md:mb-3 mb-0  md:h-screen h-auto">
      <div className="flex items-start justify-between flex-col">
        <Link href="/" className="text-4xl font-semibold dark:text-accent text-primary">
          <div className="flex items-center justify-center flex-col ">
            <div className="relative group">
              <span className="text-4xl font-bold text-primary dark:text-accent transition-all duration-300 ease-in-out group-hover:opacity-0">
                AE<span className="dark:text-white text-accent">.</span>
              </span>
              <span className=" inset-0 flex items-center justify-center text-4xl font-bold text-primary dark:text-white opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100">
                AHMANI ELMOKHTAR
              </span>
            </div>
          </div>
        </Link>

        <section className="flex items-center gap-8">

          <Nav />
        </section>

      </div>
    </header>
  );
};

export default Header;
