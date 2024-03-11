function MyImage() {
  return (
    <div className='flex justify-center items-center w-full relative'>
      <div className='absolute m-auto z-0'>
        <img
          src='/bg-51.png'
          alt=''
          className='md:h-320 md:w-320 lg:h-400 lg:w-400'
        />
      </div>
      <div
        className='flex justify-center z-10
       md:h-320 md:w-320 lg:h-400 lg:w-400'
      >
        <img src='/myPhoto.png' alt='' className='' />
      </div>
    </div>
  );
}

export default MyImage;
