import { Link as ScrollLink } from 'react-scroll';
import { useContext } from 'react';
import { AppContext } from '../context/AppContextProvider';

function AboutMeText() {
  const { translation } = useContext(AppContext);
  return (
    <section
      className='flex flex-col justify-between h-fit  w-2/6 pl-10 py-2 text-white
      lg:border-l-2 border-white lg:items-start 
      md:my-10 md:items-center 
      '
    >
      <h2
        className='text-tertiary py-2 select-none
        lg-text-5xl
        md:text-7xl
        '
      >
        Sobre Mi
      </h2>
      <p
        className='py-2 select-none 
      xl:text-xl
      lg:text-lg
      md:text-lg
      '
      >
        {
          //About me text
          translation.AboutMeText
        }
      </p>
      <span
        className='font-bold py-2 text-md select-none
      lg:text-lg
      md:text-md
        '
      >
        {
          //Span about me
          translation.SpanAboutMe
        }
      </span>

      <button
        className='rounded-lg border-2 border-button px-2 my-2 select-none 
      xxl:w-3/12 
      xl:w-4/12
      lg:w-5/12
      md:w-6/12
      
      '
      >
        <ScrollLink
          to='projects'
          smooth={true}
          duration={1000}
          className='cursor-pointer
          xl:text-xl
          md:text-lg
          '
        >
          {
            //See projects
            translation.SeeProjects
          }
        </ScrollLink>
      </button>
    </section>
  );
}

export default AboutMeText;
