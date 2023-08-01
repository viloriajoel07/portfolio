import { ProjectView } from "~/components";
import BgBlur from "~/components/BgBlur";

const WorksPage = () => {
  return (
    <main className="flex flex-col justify-center items-center z-0">
      <div className="flex flex-col justify-center items-center gap-1 z-10">
        <h2 className="text-4xl lg:5xl px-4 font-bold w-full flex justify-center gap-1 text-center">
          Personal Projects <span className="text-blue-600"> .</span>{" "}
        </h2>
      </div>
      {/* <span className="w-full px-4 md:w-3/6 h-1 mt-5 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-600 to-pink-600"></span> */}
      <ProjectView />
      <BgBlur />
    </main>
  );
};

export default WorksPage;
