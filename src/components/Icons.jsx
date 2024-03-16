import iconJs from '../../public/javascript.png';
import iconReact from '../../public/react.png';
import iconTailwind from '../../public/tailwind.png';
import iconVite from '../../public/vite.png';
import iconGit from '../../public/git.png';

export default function icons() {
  //List of Icons
  const iconsRoutesList = [iconReact, iconJs, iconTailwind, iconVite, iconGit];
  return (
    <div
      className='
      flex w-full justify-center items-center
      lg:justify-start lg:items-start 
      '
    >
      <ul
        className='
        flex
        '
      >
        {iconsRoutesList.map((icon, index) => {
          return (
            <li key={index}>
              <img
                src={icon}
                alt='programming language icon'
                className='
                h-7 w-7 mr-4 
                lg:mt-0 mt-5 
                transition-all duration-300 ease-in-out 
                hover:scale-110'
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
