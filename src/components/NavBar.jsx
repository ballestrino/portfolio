import NavOptions from './NavOptions.jsx';

function NavBar() {
  return (
    <nav
      className='relative justify-end items-center text-white w-screen hidden
      lg:flex lg:fixed lg:top-4
      '
    >
      <NavOptions />
    </nav>
  );
}

export default NavBar;
