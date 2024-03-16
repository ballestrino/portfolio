import { useContext } from "react";
import { AppContext } from "../context/AppContextProvider";
import LinkIcons from "./LinkIcons";

export default function Footer() {
  const { translationProvider } = useContext(AppContext);
  return (
    <footer id="contact" className="h-vh25 w-screen border-t-1 border-gray-700">
      <section className="m-auto flex h-full w-7/12 flex-col items-center justify-center lg:w-3/6 lg:flex-row lg:justify-between">
        <h2
          className="mb-5 cursor-pointer select-none text-3xl text-primary transition-all duration-300 ease-in-out hover:text-hoverContactUs 
          lg:mb-0 lg:mr-10 lg:text-4xl xl:text-5xl xxl:text-6xl"
        >
          {translationProvider.ContactUsTitle}
        </h2>

        <div className="flex flex-col items-center lg:items-start">
          <p className="text-footer transition-all duration-300 ease-in-out hover:text-white lg:mr-10 lg:text-xl">
            <a href="mailto:nachoballestrino02@gmail.com">
              nachoballestrino02@gmail.com
            </a>
          </p>
          <p>
            <a
              className="text-footer transition-all duration-300 ease-in-out hover:text-white lg:text-xl"
              href="tel:+598 98 857 476"
            >
              +598 98 857 476
            </a>
          </p>
          <div className="flex lg:hidden">
            <LinkIcons />
          </div>
        </div>
      </section>
    </footer>
  );
}
