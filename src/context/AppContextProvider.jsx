import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import translations from '../translations.json';
import Cookies from 'js-cookie';

export const AppContext = React.createContext();

function AppContextProvider({ children }) {
  const [language, setLanguage] = useState(Cookies.get('language') || 'en');

  useEffect(() => {
    if (!language) {
      setLanguage(navigator.language.substring(0, 2));
    } else if (language == 'es') {
      setLanguage('es');
    } else if (language == 'en') {
      setLanguage('en');
    } else {
      setLanguage('en');
    }
    Cookies.set('language', language);
  }, [setLanguage, language]);

  function getLanguage() {
    let lang = language;
    let translation = translations[lang];
    if (!translation) {
      translation = translations.en;
    }
    return translation;
  }
  let translation = getLanguage();

  return (
    <AppContext.Provider value={{ language, setLanguage, translation }}>
      {children}
    </AppContext.Provider>
  );
}

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContextProvider;
