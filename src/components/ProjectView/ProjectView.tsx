import SectionDemo from "./SectionDemo";
import { ProjectsDeploy, ProjectsGallery } from "./constant";
const ProjectView = () => {
  return (
    <section className="z-10 flex flex-col justify-center items-center pb-8 w-full">
      <h2 className="text-3xl font-bold w-full flex justify-center gap-1 py-6">
        In Deploy
      </h2>
      <SectionDemo data={ProjectsDeploy} deploy />
      <h2 className="text-3xl font-bold w-full flex justify-center gap-1 py-6">
        Projects Gallery
      </h2>
      <SectionDemo data={ProjectsGallery} />
    </section>
  );
};

export default ProjectView;
