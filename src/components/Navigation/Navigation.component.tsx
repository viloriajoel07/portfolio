"use client";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

import { Github } from "~/assets/icons";
import linkeingIcon from "~/assets/icons/linkedin.svg";
import InstagramIcon from "~/assets/icons/instagram.svg";

type Link = {
  title: string;
  path: string;
  id: number;
};

interface NavigationProps {}

const links = [
  {
    title: "Home",
    path: "#home",
    id: 1,
  },
  {
    title: "Experience",
    path: "#experience",
    id: 2,
  },
  {
    title: "Projects",
    path: "#projects",
    id: 4,
  },
  {
    title: "Skills",
    path: "#skills",
    id: 3,
  },
];

const Navigation: FC<NavigationProps> = (props) => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    // hacer nav fixed cuando haga scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Establecer un umbral de desplazamiento (por ejemplo, 100 píxeles)
      setIsFixed(scrollPosition > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full bg-transparent flex justify-center h-24 md:h-20 z-10 ${
        isFixed && "fixed backdrop-blur-lg z-50 transition-all"
      }`}
    >
      <div className="max-w-[60rem] w-full flex flex-col md:flex-row justify-center md:justify-between items-center px-8 md:px-0">
        <nav className="flex md:gap-8 my-2 md:my-0 flex-col md:flex-row justify-center items-center">
          <h2 className="text-white font-semibold">VILORIA DEV.</h2>
          <ul className="flex items-center gap-4 px-2">
            {links.map((link: Link) => (
              <a
                href={link.path}
                key={link.id}
                className="text-gray-300 hover:text-gray-200 cursor-pointer"
                title={link.title}
              >
                {link.title}
              </a>
            ))}
          </ul>
        </nav>
        <section className="flex gap-4">
          <Link
            href="https://www.instagram.com/esteban_vl07/"
            target="_blank"
            className="m-0 p-0 hover:scale-110 transition-all duration-150"
          >
            <Image src={InstagramIcon} alt="linkeding icon" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/joel-esteban-viloria-algarin-8a1333223/"
            target="_blank"
            className="m-0 p-0 hover:scale-110 transition-all duration-150 pt-[2px]"
          >
            <Image src={linkeingIcon} alt="linkeding icon" />
          </Link>
          <Link
            href="https://github.com/viloriajoel07/"
            className="m-0 p-0 hover:scale-110 transition-all duration-150"
          >
            <Github />
          </Link>
        </section>
      </div>
    </header>
  );
};

export default Navigation;
