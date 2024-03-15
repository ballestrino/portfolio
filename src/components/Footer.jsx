export default function Footer() {
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
        text-tertiary font-mono select-none
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
          Contact Us
        </h2>
        <div>
          <p className='lg:mr-10 text-footer lg:text-xl'>
            <a href='mailto:nachoballestrino02@gmail.com'>
              nachoballestrino02@gmail.com
            </a>
          </p>
          <p>
            <a className='text-footer lg:text-xl' href='tel:+598 98 857 476'>
              +598 98 857 476
            </a>
          </p>
        </div>
      </section>
    </footer>
  );
}
