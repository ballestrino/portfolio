import { Link as ScrollLink } from "react-scroll";
import { useContext } from "react";
import { AppContext } from "../context/AppContextProvider";

function Menu() {
  const { translationProvider } = useContext(AppContext);
  return (
    <ul className="group group-[z-50]: md:text-md flex items-center justify-between pr-10 text-white sm:hidden lg:flex gap-7">
      <li>
        <ScrollLink
          className="cursor-pointer select-none"
          to="home"
          smooth={true}
          duration={1000}
        >
          {translationProvider.NavHome}
        </ScrollLink>
      </li>

      <li>
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

      <li>
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

      <li>
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
