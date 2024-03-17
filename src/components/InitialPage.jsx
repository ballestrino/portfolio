import NavBar from "./NavBar";
import MyImage from "./MyImage";
import Presentation from "./Presentation";

function InitialPage() {
  return (
    <header id="home" className="flex h-screen w-screen">
      <NavBar />
      <section
        className="m-auto flex w-7/12 flex-col-reverse items-center justify-center gap-y-5
         text-center lg:flex lg:w-3/6 lg:flex-row lg:items-stretch  lg:text-start"
      >
        <Presentation />
        <MyImage />
      </section>
    </header>
  );
}

export default InitialPage;
