import LanguageSelector from './LanguageSelector.jsx'
import Menu from './Menu.jsx'
function NavBar() {
  return <nav className='relative' >
    <div className='flex justify-between items-center bg-slate-900 text-white absolute top-0 w-full'>
    <section>
      <LanguageSelector/>
    </section>
    <section>
      <Menu/>
      </section>
      </div>
  </nav>;
}

export default NavBar;
