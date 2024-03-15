import iconJs from '../../public/javascript.png';
import iconReact from '../../public/react.png';
import iconTailwind from '../../public/tailwind.png';
import iconVite from '../../public/vite.png';
import iconGit from '../../public/git.png';

export default function icons() {
  return (
    <div
      className='
    flex w-full justify-center items-center
    lg:justify-start lg:items-start '
    >
      <ul className='flex '>
        <li>
          <img src={iconReact} alt='' className='h-7 w-7 mr-4 lg:mt-0 mt-5' />
        </li>
        <li>
          <img src={iconJs} alt='' className='h-7 w-7 mr-4 lg:mt-0 mt-5' />
        </li>
        <li>
          <img
            src={iconTailwind}
            alt=''
            className='h-7 w-7 mr-4 lg:mt-0 mt-5'
          />
        </li>
        <li>
          <img src={iconVite} alt='' className='h-7 w-7 mr-4 lg:mt-0 mt-5' />
        </li>
        <li>
          <img src={iconGit} alt='' className='h-7 w-7 mr-4 lg:mt-0 mt-5' />
        </li>
      </ul>
    </div>
  );
}
