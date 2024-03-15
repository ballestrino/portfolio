import { AppContext } from '../context/AppContextProvider';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

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
        flex justify-center items-center
        w-3/6 
        h-full
        m-auto
        
        '
      >
        <h2
          className='
        text-tertiary font-mono select-none
        cursor-pointer
        xxl:text-6xl 
        xl:text-5xl
        lg:text-4xl 
        md:text-3xl 
        transition-all duration-300 ease-in-out
        hover:text-hoverContactUs
       
        '
        >
          <Link to='/contact-us'>{translationProvider.ContactUs}</Link>
        </h2>
      </section>
    </footer>
  );
}
