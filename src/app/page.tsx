import Image from "next/image";
import Link from "next/link";
import { DownloadIcon, Github, WhatsAppIcon } from "~/assets/icons";
import profileImage from "~/assets/imageProfile2.webp";
import { Button } from "~/components";
import BgBlur from "~/components/BgBlur";
import Experience from "~/components/Views/Experience.view";
import Projects from "~/components/Views/Projects.view";
import Skill from "~/components/Views/Skills.view";

export default function Home() {
  return (
    <main className={`w-full flex flex-col justify-center items-center pt-4`}>
      <div
        className="pt-20 flex h-screen flex-col gap-2 items-center justify-center px-8 max-w-[68rem] w-full z-0 relative"
        id="home"
      >
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-8 lg:gap-48 w-full h-full">
          <section className="flex flex-col gap-3 lg:gap-2 z-10 justify-center lg:justify-start items-center lg:items-start">
            <h2 className="font-bold text-4xl md:text-6xl text-center lg:text-start w-full">
              J. Esteban <br /> Viloria Algarin
            </h2>
            <h2
              className="md:text-xl font-extralight text-center lg:text-start"
              style={{ fontWeight: "100" }}
            >
              I’M FULLSTACK JAVISCRIPT DEVELOPER, +1 YEARS <br /> OF EXPERIENCE
            </h2>

            <span className="w-24 h-2 bg-sky-400 rounded-lg"></span>

            <div className="flex items-center justify-center lg:justify-start mt-6 gap-4">
              <Link
                href="/files/resumen-Joel.pdf"
                target="_blank"
                className="px-4 py-2 hover:shadow-xl hover:shadow-sky-400/10 bg-transparent border w-44 flex rounded-md gap-2 justify-center text-sky-400 border-sky-400 hover:bg-sky-400/20 transition-all"
              >
                Download CV <DownloadIcon />
              </Link>
            </div>
          </section>
          <Image
            src={profileImage}
            alt="my Image Profile"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-2"
          />
        </div>
      </div>
      <Experience />
      <Projects />
      <Skill />
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
