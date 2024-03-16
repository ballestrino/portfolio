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
        flex flex-col items-center 
        w-10/12 text-center text-balance
        m-auto 
        lg:w-3/6 lg:border-r-2 lg:border-customGray lg:text-start lg:items-start
        '
      >
        <div className='w-3/4 '>
          <h2
            className='pt-5 text-primary font-mono select-none
            xxl:text-6xl 
            xl:text-5xl 
            lg:text-4xl 
            text-3xl
            transition-all duration-300 ease-in-out
            hover:text-hoverContactUs
            '
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
