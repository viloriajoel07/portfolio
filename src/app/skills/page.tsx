import Image from "next/image";
import React from "react";
import {
  Javascript,
  ReactIcon,
  TypescriptIcon,
  PostgresIcon,
  NodeIcon,
  ExpressIcon,
} from "~/assets/icons";

const iconSkill = [
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

const SkillPage = () => {
  return (
    <main className="flex flex-col items-center justify-center py-4 px-2 z-0">
      <div className="flex flex-col items-center justify-center gap-3 z-10">
        <h2 className="font-bold text-4xl lg:text-5xl">
          My skills <span className="text-blue-600">.</span>
        </h2>
        <p className="text-gray-300 text-center">
          I have extensive knowledge in the following technologies
        </p>
        <span className="w-full md:w-4/5 h-1 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-600 to-pink-600"></span>
      </div>
      <div className="absolute z-0 w-28 pb-60 h-28 before:h-[300px] before:w-[480px] before:-translate-x-1/4 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl pr-52 before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]"></div>
      <section className="flex sm:flex-row flex-wrap justify-center items-center gap-6 py-4 max-w-full z-20">
        {iconSkill.map(({ icon, title }) => {
          return (
            <div className="flex flex-col h-20 justify-between items-center hover:scale-110 transition-all">
              {icon}
              <p className="text-gray-300 text-sm">{title}</p>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default SkillPage;
