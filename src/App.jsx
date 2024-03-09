import InitialPage from './components/InitialPage';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <>
      <InitialPage />
      <main className='w-screen'>
        <AboutMe />
      </main>
    </>
  );
}

export default App;
