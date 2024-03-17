import PropTypes from "prop-types";
import { useContext } from "react";
import { AppContext } from "../context/AppContextProvider";

export default function TitleComponent({ translationKey, thin }) {
  const { translationProvider } = useContext(AppContext);
  return (
    <h2
      className={`font-Montserrat ${thin} dark:text-dark dark:hover:text-hoverTitleDark hover:text-hoverTitle select-none text-3xl text-black transition-all duration-300 ease-in-out lg:text-4xl xl:text-5xl xxl:text-6xl`}
    >
      {translationProvider[translationKey]}
    </h2>
  );
}

TitleComponent.propTypes = {
  translationKey: PropTypes.string.isRequired,
  thin: PropTypes.string,
};
