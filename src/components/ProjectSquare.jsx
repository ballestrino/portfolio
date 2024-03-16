import prop_types from "prop-types";
import { useContext } from "react";
import { AppContext } from "../context/AppContextProvider";

function ProjectSquare({ title, description, src, alt }) {
  const { translationProvider } = useContext(AppContext);
  return (
    <div className="group flex flex-col justify-start overflow-hidden transition-transform duration-500 ease-in-out hover:scale-105">
      <div>
        <img
          //images 16/9 aspect ratio
          src={src}
          alt={alt}
          className="mb-5 aspect-video rounded-lg"
        />
      </div>
      <h3 className="text-2xl text-eachProjectH3 group-hover:text-hoverProjectTitle">
        {translationProvider[title]}
      </h3>
      <p className="text-md text-white">{translationProvider[description]}</p>
    </div>
  );
}

ProjectSquare.propTypes = {
  title: prop_types.string.isRequired,
  description: prop_types.string.isRequired,
  src: prop_types.string.isRequired,
  alt: prop_types.string.isRequired,
};

export default ProjectSquare;
