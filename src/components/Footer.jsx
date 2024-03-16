import { useContext } from 'react';
import { AppContext } from '../context/AppContextProvider';

export default function Footer() {
  const { translationProvider } = useContext(AppContext);
  return (
    <footer
      id='contact'
      className='
    bg-footer h-vh25 w-screen
      '
    >
      <section
        className='
        flex lg:flex-row items-center lg:justify-between justify-center
        flex-col
        lg:w-3/6 
        w-7/12
        h-full
        m-auto
        
        '
      >
        <h2
          className='
        text-primary font-mono select-none
        cursor-pointer
        xxl:text-6xl 
        xl:text-5xl
        lg:text-4xl 
        text-3xl 
        transition-all duration-300 ease-in-out
        hover:text-hoverContactUs
        lg:mr-10 lg:mb-0
        mb-5
       
        '
        >
          {translationProvider.ContactUsTitle}
        </h2>
        <div
          className='
        flex flex-col items-center lg:items-start
        '
        >
          <p
            className='
          lg:mr-10 text-footer lg:text-xl
          transition-all duration-300 ease-in-out
          hover:text-white
          '
          >
            <a href='mailto:nachoballestrino02@gmail.com'>
              nachoballestrino02@gmail.com
            </a>
          </p>
          <p>
            <a
              className='
            text-footer lg:text-xl
              transition-all duration-300 ease-in-out
             hover:text-white
              '
              href='tel:+598 98 857 476'
            >
              +598 98 857 476
            </a>
          </p>
        </div>
      </section>
    </footer>
  );
}
