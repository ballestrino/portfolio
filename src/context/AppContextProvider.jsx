import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import translations from '../translations.json';
import Cookies from 'js-cookie';

export const AppContext = React.createContext();

function AppContextProvider({ children }) {
  const [currentLanguage, setCurrentLanguage] = useState(
    Cookies.get('language') || 'en'
  );

  useEffect(() => {
    if (!currentLanguage) {
      setCurrentLanguage(navigator.language.substring(0, 2));
    } else if (currentLanguage == 'es') {
      setCurrentLanguage('es');
    } else if (currentLanguage == 'en') {
      setCurrentLanguage('en');
    } else {
      setCurrentLanguage('en');
    }
    Cookies.set('currentLanguage', currentLanguage);
  }, [setCurrentLanguage, currentLanguage]);

  function getLanguage() {
    let lang = currentLanguage;
    let translationProvider = translations[lang];
    if (!translationProvider) {
      translationProvider = translations.en;
    }
    return translationProvider;
  }

  let translationProvider = getLanguage();

  return (
    <AppContext.Provider
      value={{
        currentLanguage,
        setCurrentLanguage,
        translationProvider,
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
