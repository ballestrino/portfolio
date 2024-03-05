import LanguageSelector from './LanguageSelector.jsx'
import Menu from './Menu.jsx'
function NavBar() {
  return <header className='flex justify-between items-center'>
    <section>
      <LanguageSelector/>
    </section>
    <section>
      <Menu/>
    </section>
  </header>;
}

export default NavBar;
