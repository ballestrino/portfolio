import { useContext } from 'react';
import { AppContext } from './context/AppContextProvider';

function App() {
  const handleClick = () => {
    console.log('clicked');
  };
  return <button onClick={handleClick}>button test</button>;
}

export default App;
