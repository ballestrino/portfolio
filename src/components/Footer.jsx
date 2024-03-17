import LinkIcons from "./LinkIcons";
import TitleComponent from "./TitleComponent";

export default function Footer() {
  return (
    <footer id="contact" className="h-vh25 w-screen border-t-1 border-gray-700">
      <section className="m-auto flex h-full w-7/12 flex-col items-center justify-center lg:w-3/6 lg:flex-row lg:justify-between">
        <TitleComponent translationKey="ContactUsTitle" thin="font-semibold" />

        <div className="text-whit group flex flex-col items-center lg:items-start dark:text-footer">
          <p className="text-white transition-all duration-300 ease-in-out hover:text-black lg:text-xl dark:text-footer dark:hover:text-white">
            <a href="mailto:nachoballestrino02@gmail.com">
              nachoballestrino02@gmail.com
            </a>
          </p>
          <p className="text-white transition-all duration-300 ease-in-out hover:text-black lg:text-xl dark:text-footer dark:hover:text-white">
            <a href="tel:+598 98 857 476">+598 98 857 476</a>
          </p>
          <div className="flex lg:hidden">
            <LinkIcons />
          </div>
        </div>
      </section>
    </footer>
  );
}
