import React from "react";
import {
  Javascript,
  ReactIcon,
  TypescriptIcon,
  PostgresIcon,
  NodeIcon,
  ExpressIcon,
} from "~/assets/icons";
import BgBlur from "~/components/BgBlur";
import frontIcon from "../../assets/front.svg";
import backendIcon from "../../assets/backend.svg";
import Image from "next/image";
import NextIcon from "~/assets/icons/NextIcon";
import Lines from "~/assets/LINES.svg";

const iconFrontSkill = [
  {
    title: "Javascript",
    icon: <Javascript />,
  },
  {
    title: "Typescript",
    icon: <TypescriptIcon />,
  },
  {
    title: "React JS",
    icon: <ReactIcon />,
  },
  {
    title: "Next JS",
    icon: <NextIcon />,
  },
];

const iconBackSkill = [
  {
    title: "Typescript",
    icon: <TypescriptIcon />,
  },
  {
    title: "Node JS",
    icon: <NodeIcon />,
  },
  {
    title: "Express",
    icon: <ExpressIcon />,
  },
  {
    title: "Postgres",
    icon: <PostgresIcon />,
  },
];

const Skill = () => {
  return (
    <main
      className="flex flex-col overflow-hidden items-center justify-center min-h-screen w-full py-6 z-0 relative"
      id="skills"
    >
      <div className="h-full max-w-[80rem] w-full flex flex-col justify-center items-center lg:px-0">
        <div className="flex flex-col items-center justify-center z-10 mb-2">
          <h2 className="font-bold text-2xl lg:text-4xl text-gradient">
            Skillsets
          </h2>
          <p className="text-white/60 text-center">Languages & Frameworks</p>
        </div>
        <BgBlur />
        <section className="flex flex-col relative justify-center px-8 xl:px-0 gap-8 py-4 w-full z-20">
          <aside className="flex flex-col md:flex-row items-center w-full  md:w-[calc(100%-112px)] rounded-md gap-8 lg:gap-32 bg-zinc-800/10 border border-white/10 px-8 md:px-14 py-6 backdrop-blur-sm">
            <section className="flex flex-col flex-grow">
              <Image src={frontIcon} alt="front icon" className="mb-2" />
              <p className="text-2xl font-semibold">Frontend</p>
              <ul className="list-disc text-slate-100/80 pl-6 !font-light">
                <li>
                  As a frontend developer, I specialize in crafting modern
                  <br /> and efficient web interfaces, which are essential for
                  creating engaging web experiences.
                </li>
              </ul>
            </section>
            <section className="flex flex-wrap justify-center gap-7 w-full md:w-80">
              {iconFrontSkill.map(({ icon, title }) => {
                return (
                  <aside className="flex flex-col h-20 justify-between items-center hover:scale-110 transition-all">
                    {icon}
                    <p className="text-gray-300 text-sm">{title}</p>
                  </aside>
                );
              })}
            </section>
          </aside>
          <aside className="flex flex-col-reverse md:flex-row items-center md:ml-28 rounded-md gap-8 lg:gap-32 bg-zinc-800/10 border border-white/10 px-8 md:px-14 py-6 backdrop-blur-sm">
            <section className="flex flex-wrap justify-center gap-7 w-full md:w-80">
              {iconBackSkill.map(({ icon, title }) => {
                return (
                  <aside className="flex flex-col h-20 justify-between items-center hover:scale-110 transition-all">
                    {icon}
                    <p className="text-gray-300 text-sm">{title}</p>
                  </aside>
                );
              })}
            </section>
            <section className="flex flex-col flex-grow md:w-3/6">
              <Image src={backendIcon} alt="backend icon" className="mb-2" />
              <p className="text-2xl font-semibold">Backend</p>
              <ul className="list-disc text-slate-100/80 pl-6 !font-light">
                <li>
                  As a backend developer, I possess skills that enable me to
                  build efficient and scalable web applications, manage routes
                  and HTTP requests effectively, and work with databases to
                  store and retrieve data securely and efficiently.
                </li>
              </ul>
            </section>
          </aside>
        </section>
      </div>
      <Image
        src={Lines}
        alt="lines"
        className="absolute -right-4 rotate-[188deg] overflow-hidden"
      />
    </main>
  );
};

export default Skill;
