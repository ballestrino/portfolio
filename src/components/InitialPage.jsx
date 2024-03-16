import NavBar from "./NavBar";
import MyImage from "./MyImage";
import Presentation from "./Presentation";

function InitialPage() {
  return (
    <header id="home" className="flex h-screen w-screen bg-primary">
      <NavBar />
      <section
        className="m-auto flex w-7/12 flex-col-reverse items-center justify-center text-center 
        lg:m-auto lg:flex lg:w-3/6 lg:flex-row lg:items-stretch lg:justify-between lg:text-start"
      >
        <Presentation />
        <MyImage />
      </section>
    </header>
  );
}

export default InitialPage;
