import { useContext } from 'react';
import { AppContext } from '../context/AppContextProvider';

function Hello() {
  const { translation } = useContext(AppContext);
  return (
    <section
      className='flex flex-col justify-center pl-28 text-white h-screen w-full
    xxl:
    '
    >
      <h1
        className='hello-title text-tertiary font-mono select-none
      xxl:text-7.5xl 
      xl:text-7xl 
      lg:text-7xl 
      md:text-6xl 
      '
      >
        {translation.Hello}
      </h1>
      <p
        className='text-white select-none
      xxl:text-2xl
      xl:text-2xl
      lg:text-xl
      md:text-lg
      '
      >
        {translation.webDeveloper}
      </p>
    </section>
  );
}

export default Hello;
