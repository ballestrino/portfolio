import NavBar from './NavBar';
import MyImage from './MyImage';
import Presentation from './Presentation';

function InitialPage() {
  return (
    <header
      id='home'
      className='
      flex bg-primary       
      w-screen h-screen
      
      '
    >
      <NavBar />
      <section
        className='
        lg:flex lg:flex-row lg:justify-between lg:items-stretch
        lg:w-3/6 
        lg:m-auto
        lg:text-start
        w-7/12
        text-center
        flex flex-col-reverse justify-center items-center m-auto 
        '
      >
        <Presentation />
        <MyImage />
      </section>
    </header>
  );
}

export default InitialPage;
