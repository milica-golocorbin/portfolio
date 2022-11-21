import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="w-full h-full py-6 leading-relaxed tracking-wider">
      <section className="flex items-center w-11/12 h-full max-w-screen-2xl mx-auto gap-x-4 sm:w-10/12 xs:gap-x-6 s:gap-x-12">
        <div className="hidden sm:block">
          <Link href="/">
            <Image
              src="/images/logo-name.svg"
              alt="logo"
              width={50}
              height={50}
            />
          </Link>
        </div>
        <nav className="flex items-center grow gap-x-2 text-[10px] uppercase xs:font-bold xs:text-xs xs:gap-x-4 sm:justify-end s:text-sm">
          <a
            target="_blank"
            aria-label="milica golocorbin instagram link"
            href="https://dev.to/milicagolocorbin"
            rel="noopener noreferrer"
            className=" shadow-xl shadow-teal-500/50 p-2 border border-teal-500 rounded-md hover:text-teal-600 hover:translate-y-0.5 s:py-3 s:px-2"
          >
            blogs
          </a>
          <Link
            href="/projects"
            className="shadow-xl shadow-teal-500/50 p-2 border border-teal-500 rounded-md hover:text-teal-600 hover:translate-y-0.5 s:py-3 s:px-2"
          >
            projects
          </Link>
          <Link
            href="/cv"
            className="shadow-xl shadow-teal-500/50 p-2 border border-teal-500 rounded-md hover:text-teal-600 hover:translate-y-0.5 s:py-3 s:px-2"
          >
            my cv
          </Link>
        </nav>
        <div>
          <ThemeSwitch mounted={mounted} />
        </div>
      </section>
    </header>
  );
};

export default Header;
