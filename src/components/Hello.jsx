import { useContext } from 'react';
import { AppContext } from '../context/AppContextProvider';

function Hello() {
  const { translation } = useContext(AppContext);
  return (
    <section className='flex flex-col justify-center pl-28 bg-slate-900 text-white h-screen w-full'>
      <h1 className='hello-title text-6xl text-primary font-mono select-none'>
        {translation.Hello}
      </h1>
      <p className='text-white select-none'>{translation.webDeveloper}</p>
    </section>
  );
}

export default Hello;
