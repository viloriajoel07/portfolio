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

const Skill = () => {
  return (
    <main
      className="pt-20 flex bg-slate-950 flex-col items-center w-full justify-center h-screen py-4 px-2 z-0"
      id="skills"
    >
      <div className=" h-full max-w-[70rem] flex flex-col justify-center items-center px-6 lg:px-0">
        <div className="flex flex-col items-center justify-center gap-3 z-10">
          <h2 className="font-bold text-4xl lg:text-5xl">
            My skills <span className="text-sky-400">.</span>
          </h2>
          <p className="text-gray-300 text-center">
            I have extensive knowledge in the following technologies
          </p>
          <span className="w-full md:w-4/5 h-1 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-600 to-pink-600"></span>
        </div>
        <BgBlur />
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
      </div>
    </main>
  );
};

export default Skill;
