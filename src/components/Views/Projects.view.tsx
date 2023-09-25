import { ProjectView } from "~/components";
import BgBlur from "~/components/BgBlur";

const Projects = () => {
  return (
    <main
      className="max-w-[70rem] flex flex-col justify-center items-center min-h-screen w-full z-0"
      id="projects"
    >
      <div className="w-full h-full flex flex-col">
        <div className="flex flex-col justify-center items-center gap-1 pt-6 z-10">
          <h2 className="text-4xl lg:5xl px-4 font-bold w-full flex justify-center gap-1 text-center text-slate-100">
            Projects
          </h2>
          <p className="text-slate-100/80">Side projects</p>
        </div>
        <ProjectView />
      </div>
    </main>
  );
};

export default Projects;
