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
    <main className={`w-full flex flex-col justify-center items-center py-4`}>
      {/* sections */}
      <div
        className="pt-20 flex h-screen flex-col gap-2 items-center justify-center pb-12 px-8 w-full"
        id="home"
      >
        <BgBlur />
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-8 lg:gap-48 w-full">
          <div className="flex flex-col gap-2 z-30">
            <h1
              className="font-bold text-center mb-2 lg:text-start -tracking-wide z-10 pb-1 trak text-transparent text-4xl md:text-6xl bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-700 to-pink-600"
              style={{ fontWeight: "900" }}
            >
              Hello, I'm Joel Viloria
            </h1>
            <h2
              className="md:text-xl max-w-[32rem] font-extralight text-center lg:text-start"
              style={{ fontWeight: "100" }}
            >
              I'm a fullstack JS developer, 2 years of experience working as a
              developer
            </h2>
            {/* <hr className="my-6" /> */}
            <div className="flex items-center justify-center lg:justify-start mt-1 gap-4">
              <Link
                href="/files/CV-Joel.pdf"
                target="_blank"
                className="px-4 py-2 hover:shadow-xl hover:shadow-sky-400/10 bg-transparent border w-44 flex rounded-md gap-2 justify-center text-sky-400 border-sky-400 hover:bg-sky-400/20 transition-all"
              >
                Download CV <DownloadIcon />
              </Link>
            </div>
          </div>
          <div className="z-10 flex-grow lg:hover:scale-110 transition-all flex justify-center">
            <Image
              src={profileImage}
              alt="my Image Profile"
              className="w-64 h-64  lg:w-80 lg:h-80 object-cover border border-blue-600 rounded-full"
            />
          </div>
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
