import DarkLightMode from "./DarkLightMode.jsx";
import NavOptions from "./NavOptions.jsx";

function NavBar() {
  return (
    <nav className="fixed top-4 z-50 w-screen items-center text-white lg:fixed lg:flex lg:justify-between">
      <DarkLightMode />
      <NavOptions />
    </nav>
  );
}

export default NavBar;
