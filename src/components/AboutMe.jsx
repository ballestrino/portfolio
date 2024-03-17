import { useContext } from "react";
import { AppContext } from "../context/AppContextProvider";
import TitleComponent from "./TitleComponent";
function AboutMe() {
  const { translationProvider } = useContext(AppContext);
  return (
    <section id="aboutMe" className="flex h-vh50 w-screen justify-items-center">
      <div
        className="
        m-auto flex w-10/12 flex-col items-center text-balance py-7 text-center
        lg:w-3/6 lg:items-start lg:border-r-2 lg:border-customGray lg:text-start"
      >
        <div className="flex w-3/4 flex-col gap-5 ">
          <TitleComponent translationKey="AboutMeTitle" thin="font-semibold" />
          <p
            className="select-none text-gray-700  
            md:text-lg lg:text-xl xl:text-2xl dark:text-white"
          >
            {translationProvider.AboutMeText}
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
