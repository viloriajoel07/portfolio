import Image from "next/image";
import Link from "next/link";
import { DownloadIcon, Github, WhatsAppIcon } from "~/assets/icons";
import profileImage from "~/assets/imageProfile.png";
import { Button } from "~/components";
import BgBlur from "~/components/BgBlur";
import Experience from "~/components/Views/Experience.view";
import Projects from "~/components/Views/Projects.view";
import Skill from "~/components/Views/Skills.view";

export default function Home() {
  return (
    <main className={`w-full flex flex-col justify-center items-center`}>
      <div
        className="flex min-h-screen flex-col gap-2 items-center justify-center px-8 xl:px-0 max-w-[70rem] w-full z-0 relative"
        id="home"
      >
        <div className="flex flex-col-reverse lg:flex-row justify-start items-center gap-8 lg:gap-48 w-full h-full">
          <section className="flex flex-col gap-3 lg:gap-2 z-10 justify-center lg:justify-start items-center lg:items-start">
            <section className="text-4xl px-8 sm:px-0 text-center text-slate-100 lg:text-start w-full md:w-[24rem]">
              <div className="flex gap-3 items-center">
                <span className="whitespace-nowrap text-2xl md:text-4xl">
                  I'm J. Esteban
                </span>
                <div className="bg-white w-full flex-1 h-10 rounded-full text-end">
                  🧑‍💻
                </div>
              </div>
              <span className="font-bold text-4xl md:text-5xl">
                WEB DEVELOPER
              </span>
              <h2
                className="text-lg font-extralight text-center lg:text-start text-slate-100/80"
                style={{ fontWeight: "100" }}
              >
                I'm fullstack developer, experienced in high-performance web
                applications.
              </h2>
            </section>

            <div className="flex flex-col sm:flex-row px-8 sm:px-0 items-center justify-between lg:justify-start gap-4 w-full mt-10">
              <div className="text-slate-100 flex flex-col flex-1">
                <p className="text-3xl font-bold text-center sm:text-start">
                  +1 YEAR
                </p>
                <p className="text-slate-100/80 whitespace-nowrap">
                  Working to JavaScript
                </p>
              </div>

              <i className="h-16 w-[2px] hidden sm:block rounded-xl bg-white/80 mx-4" />

              <Link
                href="/files/resumen-Joel.pdf"
                target="_blank"
                className="px-7 whitespace-nowrap font-semibold flex-1 py-5 h-full hover:shadow-xl text-slate-900 hover:shadow-white/10 flex rounded-md gap-2 justify-center bg-white/80 transition-all"
              >
                GET CV
              </Link>
            </div>
          </section>
          <div className="flex-1 flex ite justify-end">
            <Image
              src={profileImage}
              alt="my Image Profile"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 bg-white object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
      <Skill />
      <Projects />
      {/* <Experience /> */}
      <div className="flex sm:hidden gap-4 border px-6 py-2 rounded-xl fixed bottom-4 bg-black">
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
    </main>
  );
}
