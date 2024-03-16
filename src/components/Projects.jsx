import projectExamplePhoto from "../../public/project1.png";
import ProjectSquare from "./ProjectSquare";
import { useContext } from "react";
import { AppContext } from "../context/AppContextProvider";
function Projects() {
  const { translationProvider } = useContext(AppContext);
  return (
    <section
      id="projects"
      className="justify-items flex h-fit w-screen items-center py-20  lg:py-40 lg:pt-60"
    >
      <div className="m-auto flex w-7/12 flex-col items-center lg:w-3/6 lg:items-start">
        <h2
          className="font font-Montserrat select-none pb-5 text-3xl text-primary transition-all duration-300 ease-in-out hover:text-hoverContactUs 
          lg:text-4xl xl:text-5xl xxl:text-6xl"
        >
          {translationProvider.ProjectsTitle}
        </h2>
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
            alt="Project 4"
          />
        </section>
      </div>
    </section>
  );
}

export default Projects;
