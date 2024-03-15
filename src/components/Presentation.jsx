import { useContext } from 'react';
import { AppContext } from '../context/AppContextProvider';
import iconLinkedIn from '../../public/linkedIn.icon.svg';
import iconGitHub from '../../public/github.icon.svg';
import Icons from './Icons';

function Presentation() {
  const { translationProvider } = useContext(AppContext);

  return (
    <section
      className='
      flex flex-col justify-between text-white w-fit pt-4
      xxl:
      '
    >
      <div>
        <section>
          <h1
            className='
           text-tertiary font-mono select-none
            xxl:text-6xl 
            xl:text-5xl 
            lg:text-4xl 
            md:text-3xl 
            '
          >
            {translationProvider.Hello}
          </h1>

          <p
            className='
            text-white select-none pt-5
            xxl:text-1.5xl
            xl:text-xl
            lg:text-xl
            md:text-lg
            '
          >
            {translationProvider.webDeveloper}
          </p>
        </section>
        <section className='flex mt-5 '>
          <img
            src={iconLinkedIn}
            alt='LinkedIn icon'
            className='h-7 w-7 mr-4'
          />
          <a href='https://github.com/ballestrino' target='_blank'>
            <img src={iconGitHub} alt='' className='h-7 w-7' />
          </a>
        </section>
      </div>
      <Icons />
    </section>
  );
}

export default Presentation;
