import SectionDemo from "./SectionDemo";
import { ProjectsDeploy, ProjectsGallery } from "./constant";
const ProjectView = () => {
  return (
    <section className="z-10 flex flex-col justify-center items-center pb-8 w-full py-12">
      <SectionDemo data={ProjectsDeploy} deploy />
      {/* <SectionDemo data={ProjectsGallery} /> */}
    </section>
  );
};

export default ProjectView;
