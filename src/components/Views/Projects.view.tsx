import Image from "next/image";

import { ProjectView } from "~/components";
import lines from "~/assets/LINES.svg";

const Projects = () => {
  return (
    <main
      className=" flex flex-col justify-center items-center min-h-screen w-full z-0 relative overflow-hidden"
      id="projects"
    >
      <div className="w-full h-full flex flex-col max-w-[60rem] px-8 md:px-0 z-30">
        <div className="flex flex-col justify-center items-center gap-1 pt-6 z-10">
          <h2 className="text-4xl lg:5xl px-4 font-bold w-full flex justify-center gap-1 text-center text-gradient">
            Projects
          </h2>
          <p className="text-white/60">Side projects</p>
        </div>
        <ProjectView />
      </div>
      <span className="absolute top-80 translate-x-[20%] w-28 h-28  bg-fuchsia-600 blur-[7rem] rounded-full z-10"></span>
      <span className="absolute top-20 translate-x-80 w-16 h-16 rounded-full blur-[5rem] bg-blue-500"></span>
      <Image src={lines} alt="lines" className="absolute top-20 left-0" />
      <Image
        src={lines}
        alt="lines"
        className="absolute top-[30rem] -right-2 rotate-[185deg]"
      />
      <Image src={lines} alt="lines" className="absolute top-[60rem] left-0" />
      <span className="absolute bottom-[20rem] right-0 w-16 h-16 rounded-full blur-[4rem] bg-blue-500"></span>
      <span className="absolute top-[65rem] left-0 w-16 h-16 rounded-full blur-[4.5rem] bg-fuchsia-500"></span>
      {/* <Image src={lines} alt="lines" /> */}
    </main>
  );
};

export default Projects;
