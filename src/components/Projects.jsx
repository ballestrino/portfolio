import ProjectSquare from './ProjectSquare';
function Projects() {
  return (
    <section
      //Projects component container
      id='projects'
      className='
      flex justify-items-center bg-primary
      h-fit w-screen py-40 pt-60
      '
    >
      <div
        //title and projects grid container
        className='
        flex flex-col w-3/6 m-auto
        '
      >
        <h2
          //Projects title
          className='
        text-tertiary font-mono select-none pb-5
          xxl:text-6xl 
          xl:text-5xl 
          lg:text-4xl 
          md:text-3xl
          '
        >
          Projects
        </h2>
        <section
          //Projects grid container
          className=' 
          grid grid-cols-2 grid-rows-2 gap-x-20 gap-y-10 \
          mt-5
          '
        >
          <ProjectSquare
            title='Project 1'
            description='This is a description of the project 1'
            src='/project1.png'
            alt='Project 1'
          />
          <ProjectSquare
            title='Project 2'
            description='This is a description of the project 2'
            src='/project1.png'
            alt='Project 2'
          />

          <ProjectSquare
            title='Project 3'
            description='This is a description of the project 3'
            src='/project1.png'
            alt='Project 3'
          />
          <ProjectSquare
            title='Project 4'
            description='This is a description of the project 4'
            src='/project1.png'
            alt='Project 4'
          />
        </section>
      </div>
    </section>
  );
}

export default Projects;
