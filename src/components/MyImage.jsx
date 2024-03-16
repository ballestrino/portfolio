import personalPhoto from '../../public/personalPhoto.png';
import irregularShape from '../../public/irregularShape.png';
import { Link as ScrollLink } from 'react-scroll';

function MyImage() {
  return (
    <section className='flex justify-center items-center w-fit relative lg:pl-20 '>
      <div className='absolute m-auto z-0'>
        <img
          src={irregularShape}
          alt='Irregular shape behind my photo'
          className=' 
          select-none
          lg:h-400 lg:w-400 
          md:h-320 md:w-320
          h-270 w-270
          transition-all duration-500 ease-in-out
          hover:scale-105
          '
        />
      </div>

      <div
        className='
        flex justify-center z-10
        xxl:w-400 xxl:h-400 
        lg:h-380 lg:w-380 
        md:h-320 md:w-320 
        h-270 w-270
        transition-all duration-500 ease-in-out
        hover:scale-105
        '
      >
        <ScrollLink
          className='
          select-none
          '
          to='aboutMe'
          offset={-218} //reducir la bajada del scroll por 218px
          smooth={true}
          duration={1000}
        >
          <img
            src={personalPhoto}
            alt='A photo of Ignacio Ballestrino'
            className=''
          />
        </ScrollLink>
      </div>
    </section>
  );
}

export default MyImage;
