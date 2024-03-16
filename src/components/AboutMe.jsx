import { useContext } from "react";
import { AppContext } from "../context/AppContextProvider";

function AboutMe() {
  const { translationProvider } = useContext(AppContext);
  return (
    <section
      id="aboutMe"
      className="flex h-vh50 w-screen justify-items-center bg-primary"
    >
      <div
        className="
        m-auto flex w-10/12 flex-col items-center text-balance text-center 
        lg:w-3/6 lg:items-start lg:border-r-2 lg:border-customGray lg:text-start"
      >
        <div className="w-3/4 ">
          <h2
            className="select-none pt-5 font-mono text-3xl text-primary transition-all duration-300 ease-in-out hover:text-hoverContactUs 
            lg:text-4xl xl:text-5xl xxl:text-6xl"
          >
            {translationProvider.AboutMeTitle}
          </h2>
          <p
            className="select-none py-5 text-white 
            md:text-lg lg:text-xl xl:text-2xl"
          >
            {translationProvider.AboutMeText}
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
