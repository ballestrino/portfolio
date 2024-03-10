import { Link as ScrollLink } from 'react-scroll';
import { useContext } from 'react';
import { AppContext } from '../context/AppContextProvider';

function Menu() {
  const { translation } = useContext(AppContext);
  return (
    <ul
      className='flex justify-between p-2 pr-10
        '
    >
      <li className='pl-10'>
        <ScrollLink
          className='cursor-pointer select-none'
          to='aboutMe'
          smooth={true}
          duration={1000}
        >
          {translation.NavAbout}
        </ScrollLink>
      </li>
      <li className='pl-10'>
        <ScrollLink
          className='cursor-pointer select-none'
          to='projects'
          smooth={true}
          duration={1000}
        >
          {translation.NavProjects}
        </ScrollLink>
      </li>
      <li className='pl-10'>
        <ScrollLink
          className='cursor-pointer select-none '
          to='contact'
          smooth={true}
          duration={1000}
        >
          {translation.NavContact}
        </ScrollLink>
      </li>
    </ul>
  );
}
export default Menu;
