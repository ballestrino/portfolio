import NavBar from './NavBar';
import Hello from './Hello';
import MyImage from './MyImage';

function InitialPage() {
  return (
    <header className='w-screen h-screen bg-slate-900'>
      <NavBar />
      <section className='flex'>
        <Hello />
        <MyImage />
      </section>
    </header>
  );
}

export default InitialPage;
