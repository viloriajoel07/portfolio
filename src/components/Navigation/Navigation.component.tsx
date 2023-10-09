"use client";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";

import LinkCo from "./Link.component";
import { Github, WhatsAppIcon } from "~/assets/icons";
import linkeingIcon from "~/assets/icons/linkedin.svg";
import InstagramIcon from "~/assets/icons/instagram.svg";

type Link = {
  title: string;
  path: string;
  id: number;
};

interface NavigationProps {}

const navigationLinks = [
  {
    title: "Home",
    path: "#home",
    id: 1,
  },
  // {
  //   title: "Experience",
  //   path: "#experience",
  //   id: 2,
  // },
  {
    title: "Skills",
    path: "#skills",
    id: 3,
  },
  {
    title: "Projects",
    path: "#projects",
    id: 4,
  },
];

const Navigation: FC<NavigationProps> = (props) => {
  const [links, setLinks] = useState(navigationLinks);

  const pathname = usePathname();

  return (
    <header className="w-full bg-transparent flex justify-center h-24 md:h-20">
      <div className="max-w-[80rem] w-full flex flex-col md:flex-row justify-center md:justify-between items-center md:px-8">
        <nav className="flex gap-8 my-2 md:my-0">
          <h2 className="text-white font-semibold">VILORIA DEV.</h2>
          <ul className="flex items-center gap-4 px-2">
            {links.map((link: Link) => (
              <LinkCo
                key={link.id}
                data={link}
                active={pathname === link.path}
              />
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
