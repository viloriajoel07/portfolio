"use client";
import { FC, useEffect, useState } from "react";
import Link from "./Link.component";
import { usePathname } from "next/navigation";

type Link = {
  title: string;
  path: string;
  id: number;
};

interface NavigationProps {}

const navigationLinks = [
  {
    title: "Home",
    path: "/",
    id: 1,
  },
  {
    title: "History",
    path: "/aboutMe",
    id: 2,
  },
  {
    title: "Skills",
    path: "/skills",
    id: 3,
  },
  {
    title: "Proyects",
    path: "/works",
    id: 4,
  },
];

const Navigation: FC<NavigationProps> = (props) => {
  const [links, setLinks] = useState(navigationLinks);
  const pathname = usePathname();

  return (
    <nav className="absolute top-0 w-full h-20 px-8 py-4 sm:py-0 flex flex-col sm:flex-row justify-between items-center mb-4 sm:gap-12">
      <p className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-800">
        Dev. Viloria
      </p>
      <section className="flex flex-col gap-2">
        <ul className="flex gap-4 px-4 pt-2 sm:pt-0">
          {links.map((link: Link) => (
            <Link key={link.id} data={link} active={pathname === link.path} />
          ))}
        </ul>
        <span className="bg-blue-600 w-full h-[2px] rounded-xl"></span>
      </section>
    </nav>
  );
};

export default Navigation;
