"use client";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Github } from "~/assets/icons";
import { Button } from "../Button";
import WebIcon from "../../assets/web.svg";
interface DemoProps {
  data: any[];
  deploy?: boolean;
  clickEvent?: () => void;
}

const SectionDemo: FC<DemoProps> = ({ data, deploy = false }) => {
  return (
    <div className="flex flex-col items-center w-full">
      {deploy &&
        data.map((project, index) => {
          const validation = index % 2 === 0;
          if (!project.image) return;
          const backImage = require(`../../assets/projectsImage/${project.image}`);
          return (
            <div
              key={(project.image, index)}
              className={`w-full p-8 md:p-16 ${
                index === 0 ? "!pt-0" : ""
              } flex border-b flex-col border-white/10 ${
                !validation ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <div className="flex flex-1 justify-center items-center text-white hover:scale-110 transition-all duration-300">
                <Image
                  src={backImage}
                  alt={project.name}
                  className="z-0 w-full xs:w-3/6 lg:w-full"
                />
              </div>
              <section className="flex flex-col flex-1 justify-center">
                <p className="text-2xl font-semibold uppercase underline underline-offset-[6px] mb-3">
                  {project.name}
                </p>
                <div className="flex gap-2">
                  {project.thecnologies.map((title: string) => {
                    return (
                      <p className="px-2 py-0 text-sm rounded-lg border">
                        {title}
                      </p>
                    );
                  })}
                </div>
                <p className="text-slate-100/80 my-6 !font-light">
                  {project.description}
                </p>
                <div className="flex flex-col md:flex-row gap-2">
                  {project.href && (
                    <Link href={String(project.href)} target="_blank">
                      <Button classButton="flex gap-2 w-full whitespace-nowrap">
                        Go to website
                        <Image
                          src={WebIcon}
                          alt="Web Icon"
                          width={24}
                          className="opacity-80"
                        />
                      </Button>
                    </Link>
                  )}
                  {project.githubLink && (
                    <Link href={String(project.githubLink)} target="_blank">
                      <Button
                        typeStyle="outline"
                        classButton="flex gap-2 w-full whitespace-nowrap"
                      >
                        Check out github
                        <Github />
                      </Button>
                    </Link>
                  )}
                </div>
              </section>
            </div>
          );
        })}
    </div>
  );
};

export default SectionDemo;
