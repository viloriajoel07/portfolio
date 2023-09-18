"use client";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import LinkCo from "./Link.component";
import { usePathname } from "next/navigation";
import { Github, WhatsAppIcon } from "~/assets/icons";

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
  const [links, setLinks] = useState(navigationLinks);

  const [colorNav, setColorNav] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setColorNav(true);
      } else {
        setColorNav(false);
      }
    });
  }, []);

  return (
    <nav
      className={`fixed ${
        colorNav
          ? "bg-slate-950"
          : "bg-gradient-to-r from-slate-900 to-slate-950"
      } left-0 top-0 py-4 lg:py-5 z-50 w-full px-8 sm:px-36 flex flex-col lg:flex-row justify-between items-center gap-2 lg:gap-12 transition-colors duration-200`}
    >
      <p className="font-semibold text-2xl text-sky-400">Dev. Viloria</p>
      <section className="flex flex-col md:flex-row gap-3 items-center">
        <ul className="flex gap-4 px-2 pt-2 sm:pt-0">
          {links.map((link: Link) => (
            <LinkCo key={link.id} data={link} active={pathname === link.path} />
          ))}
        </ul>
        <div className="hidden sm:flex gap-3 border px-4 py-1 rounded-xl">
          <Link
            href="https://wa.me/3217225024?text=Hello."
            className="hover:scale-110 transition-all"
          >
            <WhatsAppIcon size={24} />
          </Link>
          <Link
            href="https://github.com/viloriajoel07"
            className="hover:scale-110 transition-all"
          >
            <Github size={24} />
          </Link>
        </div>
      </section>
    </nav>
  );
};

export default Navigation;
