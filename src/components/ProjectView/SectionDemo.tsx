"use client";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Github } from "~/assets/icons";

interface DemoProps {
  data: any[];
  deploy?: boolean;
  clickEvent?: () => void;
}

const SectionDemo: FC<DemoProps> = ({ data, deploy = false }) => {
  const handlePage = (link: string) => {
    if (!link) return;
    window.open(link, "_blank");
  };

  return (
    <div className="flex flex-wrap gap-6 items-center justify-center w-full">
      {deploy
        ? data.map((project, index) => {
            if (!project.image) return;
            const backImage = require(`../../assets/projectsImage/${project.image}`);
            return (
              <div
                key={(project.image, index)}
                className="rounded-xl max-w-96 w-96 h-60 relative z-0 cursor-pointer hover:scale-105 transition-all"
                onClick={() => handlePage(project.href)}
              >
                <div className="w-full h-full z-20 absolute p-[3px] bg-gradient-to-r from-cyan-400 via-blue-600 to-pink-600 rounded-xl">
                  <div className="w-full h-full relative">
                    <div className="w-full h-full p-3 z-30 absolute bg-black bg-opacity-90 backdrop-blur-sm rounded-xl flex flex-col gap-4">
                      <Image
                        src={backImage}
                        alt="image"
                        className="rounded-xl object-cover w-full h-full"
                      />
                      <div className="flex justify-between px-1">
                        <p className="">{project.name}</p>
                        <a
                          href={project.githubLink}
                          target="__blank"
                          onClick={(e) => e.stopPropagation()}
                          className={` ${
                            !project.githubLink
                              ? "opacity-60"
                              : "hover:scale-110"
                          }`}
                        >
                          <Github />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        : data.map((project, index) => {
            if (!project.image) return;
            const img = require(`../../assets/projectsImage/${project.image}`);
            return (
              <div
                key={(project.image, index)}
                className="w-full sm:w-72 h-56 sm:h-40 rounded-xl border-2 hover:scale-105 transition-all relative"
              >
                <Image
                  src={img}
                  alt="imageOfGallery"
                  className="w-full h-full object-cover absolute rounded-xl z-10"
                />
                <span className="w-full h-full bg-black hover:bg-opacity-60 bg-opacity-30 absolute rounded-xl z-20"></span>
              </div>
            );
          })}
    </div>
  );
};

export default SectionDemo;
