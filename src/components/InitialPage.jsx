import NavBar from './NavBar';
import MyImage from './MyImage';
import Presentation from './Presentation';

function InitialPage() {
  return (
    <header
      id='home'
      className='
      flex bg-primary 
      w-screen h-screen'
    >
      <NavBar />
      <section
        className='
      flex justify-between 
      w-3/6 
      m-auto'
      >
        <Presentation />
        <MyImage />
      </section>
    </header>
  );
}

export default InitialPage;
