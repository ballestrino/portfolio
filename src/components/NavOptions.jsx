import { Link as ScrollLink } from 'react-scroll';
import { useContext } from 'react';
import { AppContext } from '../context/AppContextProvider';

function Menu() {
  const { translationProvider } = useContext(AppContext);
  return (
    <ul
      className='flex justify-between items-center pr-6 text-white
      md:flex md:text-md
      sm:hidden
      '
    >
      <li className='pl-10 z-50'>
        <ScrollLink
          className='cursor-pointer select-none'
          to='aboutMe'
          smooth={true}
          duration={1000}
        >
          {translationProvider.NavAbout}
        </ScrollLink>
      </li>

      <li className='pl-10 z-50'>
        <ScrollLink
          className='cursor-pointer select-none'
          to='projects'
          smooth={true}
          duration={1000}
        >
          {translationProvider.NavProjects}
        </ScrollLink>
      </li>

      <li className='pl-10 z-50'>
        <ScrollLink
          className='cursor-pointer select-none'
          to='contact'
          smooth={true}
          duration={1000}
        >
          {translationProvider.NavContact}
        </ScrollLink>
      </li>
    </ul>
  );
}
export default Menu;
