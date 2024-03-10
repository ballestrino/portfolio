import { Link as ScrollLink } from 'react-scroll';
import { useContext } from 'react';
import { AppContext } from '../context/AppContextProvider';

function AboutMeText() {
  const { translation } = useContext(AppContext);
  return (
    <section className='flex flex-col justify-center border-l-2 border-white w-2/5 h-fit ml-10 pl-10 py-2 text-white'>
      <h2 className='text-5xl text-primary py-2 select-none'>Sobre Mi</h2>
      <p className='text-md py-2 select-none'>{translation.AboutMeText}</p>
      <span className='font-bold py-2 text-md select-none'>
        {translation.SpanAboutMe}
      </span>

      <button className='w-1/5  rounded-lg border-2 border-primary px-2 my-2 select-none'>
        <ScrollLink
          to='projects'
          smooth={true}
          duration={1000}
          className='cursor-pointer'
        >
          {translation.SeeProjects}
        </ScrollLink>
      </button>
    </section>
  );
}

export default AboutMeText;
