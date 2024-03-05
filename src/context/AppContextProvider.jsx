import React from 'react';
import PropTypes from 'prop-types';

export const AppContext = React.createContext();

function AppContextProvider({ children }) {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
}

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContextProvider;
