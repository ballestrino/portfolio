import ContactPage from './Pages/ContactPage';
import PrincipalPage from './Pages/PrincipalPage';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PrincipalPage />} />
        <Route path='/contact-us' element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
