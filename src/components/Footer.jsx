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
        flex items-center justify-between
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
        mr-10
       
        '
        >
          Contact Us
        </h2>
        <div>
          <p className='mr-10 text-footer text-xl'>
            <a href='mailto:nachoballestrino02@gmail.com'>
              nachoballestrino02@gmail.com
            </a>
          </p>
          <p>
            <a className='text-footer' href='tel:+598 98 857 476'>
              +598 98 857 476
            </a>
          </p>
        </div>
      </section>
    </footer>
  );
}
