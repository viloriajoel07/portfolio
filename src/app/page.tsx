import Image from "next/image";
import Link from "next/link";
import { DownloadIcon, Github, WhatsAppIcon } from "~/assets/icons";
import profileImage from "~/assets/imageProfile.png";
import { Button } from "~/components";
import BgBlur from "~/components/BgBlur";
import Experience from "~/components/Views/Experience.view";
import Projects from "~/components/Views/Projects.view";
import Skill from "~/components/Views/Skills.view";
import lines from "~/assets/LINES.svg";
import pointsGrid from "~/assets/pointsGrid.svg";
import Javascript from "~/assets/icons/Javascript.png";
import React from "~/assets/icons/React.png";

export default function Home() {
  return (
    <>
      <div
        className={`w-full flex flex-col justify-center items-center h-full relative`}
      >
        <Image src={lines} alt="lines" className="absolute -bottom-16 left-0" />
        <div className="max-w-[80rem] h-[calc(100vh-80px)] flex flex-col-reverse items-center lg:flex-row w-full md:px-8">
          <section className="flex-1 flex flex-col gap-3 py-8 lg:gap-2 z-10 justify-center lg:justify-start items-center lg:items-start">
            <section className="px-8 sm:px-0 flex flex-col justify-center md:justify-start text-slate-100">
              <p className="text-2xl md:text-3xl w-full text-center lg:text-start">
                I'M JOEL VILORIA
              </p>
              <p className="font-bold text-center lg:text-start text-3xl md:text-4xl bg-gradient-to-r from-[#944DB6] via-[#FFF0D9] to-[#FC60FF] text-transparent bg-clip-text ">
                <span className="pr-2 text-fuchsia-600/25">{"<"}</span>
                FULL-STACK DEVELOPER
                <span className="pl-2 text-fuchsia-600/25">{"/>"}</span>
              </p>
              <h2
                className="font-extralight text-center lg:text-start text-white/60 lg:w-4/6 mt-3"
                style={{ fontWeight: "100" }}
              >
                I'm fullstack developer, experienced in high-performance web
                applications.
              </h2>
            </section>

            <div className="flex flex-row px-8 sm:px-0 items-center justify-center lg:justify-start gap-2 sm:gap-4 w-full mt-4 md:mt-8 relative pb-6 md:pb-0">
              <Link
                href="/files/resumen-Joel.pdf"
                target="_blank"
                className="px-11 whitespace-nowrap font-medium py-3 hover:shadow-xl flex rounded-full gap-2 justify-center bg-gradient-to-b from-[#D66EFB] to-[#940FC2] transition-all"
              >
                GET CV
              </Link>
              <a href="#projects" className="m-0 p-0">
                <Button
                  typeStyle="outline"
                  className="px-7 whitespace-nowrap font-medium py-3"
                >
                  PROJECTS
                </Button>
              </a>
              <span className="absolute -bottom-16 -left-8 w-24 h-24  bg-fuchsia-600 blur-3xl rounded-full z-10"></span>
            </div>
          </section>
          <div className="flex flex-grow lg:flex-none justify-end relative h-fit py-8 lg:py-0">
            <span className="absolute top-0 right-0 w-16 h-16  bg-fuchsia-600 blur-2xl rounded-full z-10"></span>
            <span className="absolute -left-20 top-32 w-4 h-3 rounded-sm rotate-[35deg] bg-[#E59BFF]"></span>
            <span className="absolute top-8 right-48 w-3 h-3 rounded-sm rotate-[12deg] bg-blue-500"></span>
            <span className="absolute -right-8 top-48 w-4 h-3 rounded-sm rotate-[35deg] bg-[#FFC226]"></span>
            <span className="absolute -left-48 top-32 w-24 h-24 rounded-sm blur-[6rem] bg-[#FFC226]"></span>
            <Image
              src={pointsGrid}
              alt="grid"
              className="absolute z-0 bottom-20 -left-20 hidden md:block"
            />
            <Image
              src={Javascript}
              alt="Javascript"
              className="absolute z-0 bottom-20 -left-12 md:-left-32 levitation-animate"
            />
            <Image
              src={React}
              alt="React"
              className="absolute z-0 top-16 rigth-8 levitation-animate"
            />
            <Image
              src={pointsGrid}
              alt="grid"
              className="absolute z-0 top-36 hidden md:block"
            />

            <Image
              src={profileImage}
              alt="my Image Profile"
              className="w-52 sm:w-64 lg:w-80 object-contain z-20"
            />
            <span className="absolute bottom-60 right-0 w-16 h-16  bg-fuchsia-600 blur-3xl rounded-full z-10"></span>
          </div>
        </div>
        {/* <Experience /> */}
      </div>
      <Skill />
      <Projects />
    </>
  );
}
