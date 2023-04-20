import { ProjectView } from "~/components";

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
      <div className="absolute z-0 w-28 pb-60 h-28 before:h-[300px] before:w-[480px] before:-translate-x-1/4 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl pr-52 before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]"></div>
    </main>
  );
};

export default WorksPage;
