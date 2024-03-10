function MyImage() {
  return (
    <div className='flex justify-center items-center w-full relative'>
      <div className='absolute m-auto z-0'>
        <img src='/bg-51.png' alt='' className='' />
      </div>
      <div className='flex justify-center w-3/5 h-3/5 z-10'>
        <img src='/myPhoto.png' alt='' className='' />
      </div>
    </div>
  );
}

export default MyImage;
