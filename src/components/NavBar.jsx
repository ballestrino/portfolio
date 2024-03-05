import LanguageSelector from './LanguageSelector.jsx'
import Menu from './Menu.jsx'
function NavBar() {
  return <nav className='flex justify-between items-center'>
    <section>
      <LanguageSelector/>
    </section>
    <section>
      <Menu/>
    </section>
  </nav>;
}

export default NavBar;
