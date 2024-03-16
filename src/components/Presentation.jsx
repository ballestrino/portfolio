import { useContext } from "react";
import { AppContext } from "../context/AppContextProvider";
import LinkIcons from "./LinkIcons";
import Icons from "./Icons";

function Presentation() {
  const { translationProvider } = useContext(AppContext);

  return (
    <section
      className="flex w-fit flex-col items-center pt-4 text-white
      lg:justify-between"
    >
      <section>
        <div className="flex flex-col items-center justify-center">
          <h1
            className="select-none text-3xl font-bold text-primary transition-all duration-300 
            ease-in-out hover:text-hoverContactUs lg:text-4xl xl:text-5xl xxl:text-6xl "
          >
            {translationProvider.Hello}
          </h1>

          <p
            className="select-none pl-1 pt-5 text-md text-white
            md:text-lg lg:text-xl xxl:text-1.5xl"
          >
            {translationProvider.webDeveloper}
          </p>
        </div>

        <div className="hidden pl-1 lg:flex">
          <LinkIcons />
        </div>
      </section>

      <Icons />
    </section>
  );
}

export default Presentation;
