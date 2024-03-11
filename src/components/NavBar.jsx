import LanguageSelector from './LanguageSelector.jsx';
import Menu from './Menu.jsx';
function NavBar() {
  return (
    <nav className='relative'>
      <div className='flex justify-between items-center  text-white absolute top-4 w-full'>
        <section>
          <LanguageSelector />
        </section>
        <section>
          <Menu />
        </section>
      </div>
    </nav>
  );
}

export default NavBar;
