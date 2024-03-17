import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import translations from "../translations.json";
import Cookies from "js-cookie";

export const AppContext = React.createContext();

function AppContextProvider({ children }) {
  //Detects Dark Light mode changes
  const [mode, setMode] = useState(Cookies.get("mode") || "dark");
  useEffect(() => {
    if (!mode) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setMode("dark");
        Cookies.set("mode", "dark");
      } else {
        setMode("light");
        Cookies.set("mode", "light");
      }
    }
  }, [mode, setMode]);

  //Detects Language Changes
  const [currentLanguage, setCurrentLanguage] = useState(
    Cookies.get("language") || "en",
  );

  useEffect(() => {
    if (!currentLanguage) {
      setCurrentLanguage(navigator.language.substring(0, 2));
    } else if (currentLanguage == "en") {
      setCurrentLanguage("en");
    } else {
      setCurrentLanguage("en");
    }
    Cookies.set("currentLanguage", currentLanguage);
  }, [setCurrentLanguage, currentLanguage]);

  let lang = currentLanguage;
  let translationProvider = translations[lang] || translations.en;

  return (
    <AppContext.Provider
      value={{
        currentLanguage,
        //setCurrentLanguage, if you want to change the language with a language changer
        translationProvider,
        mode,
        setMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContextProvider;
