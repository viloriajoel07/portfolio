import { ProjectView } from "~/components";
import BgBlur from "~/components/BgBlur";

const Projects = () => {
  return (
    <main
      className="pt-20 max-w-[68rem] flex flex-col justify-center items-center min-h-screen w-full z-0"
      id="projects"
    >
      <div className="w-full h-full flex flex-col">
        <div className="flex flex-col justify-center items-center gap-1 z-10">
          <h2 className="text-4xl lg:5xl px-4 font-bold w-full flex justify-center gap-1 text-center">
            Personal Projects <span className="text-sky-400"> .</span>
          </h2>
        </div>
        <ProjectView />
      </div>
    </main>
  );
};

export default Projects;
