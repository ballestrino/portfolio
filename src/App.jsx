import { useContext } from 'react';
import { AppContext } from './context/AppContextProvider';
import NavBar from './components/NavBar';

function App() {
  const handleClick = () => {
    console.log('clicked');
  };
  return (<>
  <NavBar/>
  </>);
}

export default App;
