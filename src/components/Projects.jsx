import projectExamplePhoto from '../../public/project1.png';
import ProjectSquare from './ProjectSquare';
import { useContext } from 'react';
import { AppContext } from '../context/AppContextProvider';
function Projects() {
  const { translationProvider } = useContext(AppContext);
  return (
    <section
      //Projects component container
      id='projects'
      className='
      flex justify-items items-center bg-primary
      h-fit w-screen lg:py-40 lg:pt-60 py-20 
      '
    >
      <div
        //title and projects grid container
        className='
        flex flex-col items-center lg:items-start lg:w-3/6 w-7/12 m-auto
        '
      >
        <h2
          //Projects title
          className='
        text-primary font-mono select-none pb-5
          xxl:text-6xl 
          xl:text-5xl 
          lg:text-4xl 
          text-3xl
          transition-all duration-300 ease-in-out
          hover:text-hoverContactUs
          '
        >
          {translationProvider.ProjectsTitle}
        </h2>
        <section
          //Projects grid container
          className=' 
          grid xl:grid-cols-2 xl:grid-rows-2 xl:gap-x-20 gap-y-10 \
          mt-5
          '
        >
          <ProjectSquare
            title='project1Title'
            description='descriptionProject1'
            src={projectExamplePhoto}
            alt='Project 1'
          />
          <ProjectSquare
            title='project2Title'
            description='descriptionProject2'
            src={projectExamplePhoto}
            alt='Project 2'
          />

          <ProjectSquare
            title='project3Title'
            description='descriptionProject3'
            src={projectExamplePhoto}
            alt='Project 3'
          />
          <ProjectSquare
            title='project4Title'
            description='descriptionProject4'
            src={projectExamplePhoto}
            alt='Project 4'
          />
        </section>
      </div>
    </section>
  );
}

export default Projects;
