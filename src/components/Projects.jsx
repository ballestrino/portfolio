import projectExamplePhoto from "../../public/project1.png";
import ProjectSquare from "./ProjectSquare";
import TitleComponent from "./TitleComponent";
function Projects() {
  return (
    <section
      id="projects"
      className="justify-items flex h-fit w-screen items-center py-20  lg:py-40 lg:pt-60"
    >
      <div className="m-auto flex w-7/12 flex-col items-center lg:w-3/6 lg:items-start">
        <TitleComponent translationKey="ProjectsTitle" thin="font-semibold" />
        <section
          className="mt-5 grid gap-y-10 
          xl:grid-cols-2 xl:grid-rows-2 xl:gap-x-20"
        >
          <ProjectSquare
            title="project1Title"
            description="descriptionProject1"
            src={projectExamplePhoto}
            alt="Project 1"
          />
          <ProjectSquare
            title="project2Title"
            description="descriptionProject2"
            src={projectExamplePhoto}
            alt="Project 2"
          />

          <ProjectSquare
            title="project3Title"
            description="descriptionProject3"
            src={projectExamplePhoto}
            alt="Project 3"
          />
          <ProjectSquare
            title="project4Title"
            description="descriptionProject4"
            src={projectExamplePhoto}
            alt="Project watermark"
          />
        </section>
      </div>
    </section>
  );
}

export default Projects;
