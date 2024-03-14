import { useContext } from 'react';
import { AppContext } from '../context/AppContextProvider';

function AboutMe() {
  const { translationProvider } = useContext(AppContext);
  return (
    <section
      id='aboutMe'
      className='
        flex justify-items-center 
        h-vh50 w-screen
      bg-primary
        '
    >
      <div
        className='
        flex flex-col items-start 
        w-3/6 
        m-auto 
        border-r-2 border-customGray
        '
      >
        <div className='w-3/4 '>
          <h2
            className='pt-5 text-tertiary font-mono select-none
            xxl:text-6xl 
            xl:text-5xl 
            lg:text-4xl 
            md:text-3xl '
          >
            {translationProvider.AboutMeTitle}
          </h2>
          <p
            className='text-white select-none py-5
            xl:text-2xl
            lg:text-xl
            md:text-lg'
          >
            {translationProvider.AboutMeText}
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
