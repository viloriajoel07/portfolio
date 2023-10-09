import Image from "next/image";
import SectionDemo from "./SectionDemo";
import { ProjectsDeploy } from "./constant";

const ProjectView = () => {
  return (
    <section className="z-10 flex flex-col justify-center items-center px-8 pb-8 w-full py-12 relative">
      {/* <Image src={lines} alt="lines" /> */}
      <SectionDemo data={ProjectsDeploy} deploy />
    </section>
  );
};

export default ProjectView;
