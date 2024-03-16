import { Link as ScrollLink } from "react-scroll";
import { useContext } from "react";
import { AppContext } from "../context/AppContextProvider";

function Menu() {
  const { translationProvider } = useContext(AppContext);
  return (
    <ul className="md:text-md flex items-center justify-between pr-6 text-white sm:hidden lg:flex">
      <li className="z-50 pl-10">
        <ScrollLink
          className="cursor-pointer select-none"
          to="home"
          smooth={true}
          duration={1000}
        >
          {translationProvider.NavHome}
        </ScrollLink>
      </li>

      <li className="z-50 pl-10">
        <ScrollLink
          className="cursor-pointer select-none"
          to="aboutMe"
          offset={-218} //reducir la bajada del scroll por 218px
          smooth={true}
          duration={1000}
        >
          {translationProvider.NavAbout}
        </ScrollLink>
      </li>

      <li className="z-50 pl-10">
        <ScrollLink
          className="cursor-pointer select-none"
          to="projects"
          offset={185}
          smooth={true}
          duration={1000}
        >
          {translationProvider.NavProjects}
        </ScrollLink>
      </li>

      <li className="z-50 pl-10">
        <ScrollLink
          className="cursor-pointer select-none"
          to="contact"
          //prevents the scroll to crash with the final of the page
          offset={-690}
          smooth={true}
          duration={1000}
        >
          {translationProvider.NavContact}
        </ScrollLink>
      </li>
    </ul>
  );
}
export default Menu;
