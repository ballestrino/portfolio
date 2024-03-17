import { useContext } from "react";
import { AppContext } from "../context/AppContextProvider";
import LinkIcons from "./LinkIcons";
import Icons from "./Icons";
import TitleComponent from "./TitleComponent";

function Presentation() {
  const { translationProvider } = useContext(AppContext);

  return (
    <section
      className="flex w-fit flex-col items-center gap-y-6
      text-white lg:justify-between"
    >
      <section>
        <div className="flex flex-col items-center justify-center">
          <TitleComponent translationKey="PresentationTitle" thin="font-bold" />
          <p
            className="select-none pl-1 pt-5 text-md text-gray-700 md:text-lg
            lg:text-xl xxl:text-1.5xl dark:text-white"
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
