import personalPhoto from "../../public/personalPhoto.png";
import irregularShape from "../../public/irregularShape.png";
import { Link as ScrollLink } from "react-scroll";

function MyImage() {
  return (
    <section className="relative flex w-fit items-center justify-center lg:pl-20 ">
      <div className="absolute z-0 m-auto">
        <img
          src={irregularShape}
          alt="Irregular shape behind my photo"
          className="h-270 w-270 select-none transition-all duration-500 ease-in-out hover:scale-105 lg:h-320 lg:w-320"
        />
      </div>

      <div
        className="z-10 flex h-270 w-270 justify-center transition-all duration-500 ease-in-out hover:scale-105 
        lg:h-320 lg:w-320 xl:h-400 xl:w-400"
      >
        <ScrollLink
          className="select-none"
          to="aboutMe"
          offset={-218} //reducir la bajada del scroll por 218px
          smooth={true}
          duration={1000}
        >
          <img src={personalPhoto} alt="A photo of Ignacio Ballestrino" />
        </ScrollLink>
      </div>
    </section>
  );
}

export default MyImage;
