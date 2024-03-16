import NavOptions from "./NavOptions.jsx";

function NavBar() {
  return (
    <nav className="relative hidden w-screen items-center justify-end text-white lg:fixed lg:top-4 lg:flex">
      <NavOptions />
    </nav>
  );
}

export default NavBar;
