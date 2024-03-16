import InitialPage from "./components/InitialPage";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div className=" inset-0 -z-10 h-fit w-full items-center [background:radial-gradient(125%_125%_at_50%_10%,#000814_40%,#003566_100%)]">
        <InitialPage />
        <MainContent />
        <Footer />
      </div>
    </>
  );
}
