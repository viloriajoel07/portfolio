import { ProjectView } from "~/components";
import BgBlur from "~/components/BgBlur";

const WorksPage = () => {
  return (
    <main className="flex flex-col justify-center items-center z-0">
      <div className="flex flex-col justify-center items-center gap-1 z-10">
        <h2 className="text-4xl lg:5xl font-bold w-full flex justify-center gap-1 text-center">
          Personal Projects <span className="text-blue-600"> .</span>{" "}
        </h2>
        <p className="mb-2 text-gray-300 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          sapiente minus sequi.
        </p>
        <span className="w-full md:w-4/5 h-1 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-600 to-pink-600"></span>
      </div>
      <ProjectView />
      <BgBlur />
    </main>
  );
};

export default WorksPage;
