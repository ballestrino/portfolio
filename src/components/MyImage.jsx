import personalPhoto from '../../public/personalPhoto.png';
import irregularShape from '../../public/irregularShape.png';

function MyImage() {
  return (
    <section className='flex justify-center items-center w-fit relative pl-20 '>
      <div className='absolute m-auto z-0'>
        <img
          src={irregularShape}
          alt='Irregular shape behind my photo'
          className=' 
          lg:h-400 lg:w-400 
          md:h-320 md:w-320
          '
        />
      </div>
      <div
        className='
        flex justify-center z-10
        xxl:w-400 h-400 
        lg:h-380 lg:w-380 
        md:h-320 md:w-320 
        '
      >
        <img
          src={personalPhoto}
          alt='A photo of Ignacio Ballestrino'
          className=''
        />
      </div>
    </section>
  );
}

export default MyImage;
